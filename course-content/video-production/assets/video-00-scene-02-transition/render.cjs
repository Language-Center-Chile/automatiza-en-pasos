const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const {createCanvas}=require('@napi-rs/canvas');
const scene=require('./scene.js');
const spec=require('./spec.json');

const out=path.resolve(process.argv[2]||path.join(__dirname,'rendered'));
const frames=path.join(out,'frames');fs.mkdirSync(frames,{recursive:true});
const canvas=createCanvas(spec.width,spec.height),ctx=canvas.getContext('2d');
const hashes=[];
for(let i=0;i<spec.duration*spec.fps;i++){
  scene.drawFrame(ctx,i/spec.fps);
  const data=canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(frames,`frame-${String(i).padStart(4,'0')}.png`),data);
  hashes.push(crypto.createHash('sha256').update(data).digest('hex'));
}
const mp4=path.join(out,'video-00-scene-02-transition.mp4');
execFileSync('ffmpeg',['-y','-framerate',String(spec.fps),'-i',path.join(frames,'frame-%04d.png'),'-c:v','libx264','-pix_fmt','yuv420p','-movflags','+faststart',mp4],{stdio:'ignore'});
const samples=[0,1.1,4.4,7.15,9.9];
for(const t of samples){scene.drawFrame(ctx,t);fs.writeFileSync(path.join(out,`sample-${String(t).replace('.','_')}s.png`),canvas.toBuffer('image/png'))}
const probe=JSON.parse(execFileSync('ffprobe',['-v','error','-select_streams','v:0','-show_entries','stream=codec_name,width,height,r_frame_rate,nb_frames,duration','-show_entries','format=duration','-of','json',mp4],{encoding:'utf8'}));
const qa={generatedAt:new Date().toISOString(),renderer:'@napi-rs/canvas + ffmpeg',samples,frames:hashes.length,uniqueFrames:new Set(hashes).size,firstFrameSha256:hashes[0],lastFrameSha256:hashes.at(-1),videoSha256:crypto.createHash('sha256').update(fs.readFileSync(mp4)).digest('hex'),probe};
fs.writeFileSync(path.join(out,'qa.json'),JSON.stringify(qa,null,2)+'\n');console.log(JSON.stringify(qa,null,2));
