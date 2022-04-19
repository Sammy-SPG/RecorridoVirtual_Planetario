import {gsap} from 'gsap';

export default function GsapAnimation(component){
    gsap.to(component, {width: 0, height: 0}, {duration: 3, width: 100, height: 100, onComplete: ()=> console.log('complete')});
}