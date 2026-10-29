"""Read originals; create review-only web derivatives. Python 3 + ffmpeg/ffprobe."""
import argparse,json,subprocess,pathlib,hashlib
p=argparse.ArgumentParser();p.add_argument('--source',required=True);a=p.parse_args()
root=pathlib.Path(__file__).resolve().parents[1]
items=[('navigation','Robonix-Go2中间件适配与语音导航',30,90,45),('tracking','MiniCPM-RobotTrack视觉跟随实机部署',0,90,60),('simulation','Robonix-Go2 MuJoCo机器人仿真系统',15,90,45),('sport','Go2 Sport Actions运动技能开发',0,90,60)]
rows=[]
for slug,name,start,duration,poster in items:
 matches=list(pathlib.Path(a.source).rglob(name+'.mp4'))
 if len(matches)!=1:raise RuntimeError('Expected unique original: '+name)
 src=matches[0];info=json.loads(subprocess.check_output(['ffprobe','-v','quiet','-show_format','-show_streams','-of','json',str(src)]));v=next(s for s in info['streams'] if s['codec_type']=='video')
 out=root/'public/videos'/f'{slug}.mp4';out.parent.mkdir(parents=True,exist_ok=True)
 image=root/'public/images'/f'{slug}.webp';image.parent.mkdir(parents=True,exist_ok=True)
 vf='scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1'
 subprocess.run(['ffmpeg','-y','-v','error','-ss',str(start),'-i',str(src),'-t',str(duration),'-vf',vf,'-c:v','libx264','-preset','fast','-crf','22','-maxrate','2400k','-bufsize','4800k','-pix_fmt','yuv420p','-c:a','aac','-b:a','96k','-map_metadata','-1','-movflags','+faststart',str(out)],check=True)
 subprocess.run(['ffmpeg','-y','-v','error','-ss',str(poster),'-i',str(src),'-vf',vf,'-frames:v','1','-quality','85',str(image)],check=True)
 final=json.loads(subprocess.check_output(['ffprobe','-v','quiet','-show_format','-show_streams','-of','json',str(out)]))
 if out.stat().st_size>35*1024**2:raise RuntimeError('Output exceeds size budget')
 rows.append(dict(project=slug,original=str(src),originalBytes=src.stat().st_size,originalDuration=info['format']['duration'],resolution=f"{v['width']}x{v['height']}",fps=v['avg_frame_rate'],codec=v['codec_name'],audio=any(s['codec_type']=='audio' for s in info['streams']),web=str(out.relative_to(root)),webBytes=out.stat().st_size,webDuration=final['format']['duration'],excerpt=f'{start}–{start+duration}s',sha256=hashlib.sha256(src.read_bytes()).hexdigest()))
 (root/'.local').mkdir(exist_ok=True);(root/'.local/media.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
 (root/'VIDEO_INVENTORY.md').write_text('# Video inventory — LOCAL ONLY\n\nContinuous 90-second excerpts; no time compression or reordered actions. Excerpts are not complete validation evidence. 720p letterboxed; original aspect retained. Review people, laboratory interiors, screen content and audio before publication. Sampling is not an exhaustive privacy audit.\n\n'+ '\n\n'.join('## '+r['project']+'\n\n'+'\n'.join('- '+k+': '+str(v) for k,v in r.items()) for r in rows),encoding='utf-8')
 print(slug,out.stat().st_size,flush=True)
