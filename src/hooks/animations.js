import {gsap} from 'gsap';

export default function GsapAnimation(component){
    gsap.to(component, {duration: 3, delay: 1,opacity: 1});
}