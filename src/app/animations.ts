import { animate, state, style, transition, trigger } from '@angular/animations';

export const hamburgerMenuExpandAnimationTrigger = trigger("hamburgerMenuExpandAnimation",[
   state("hide", style({
       height: 0
   })),
   state("show", style({
       height: 160
   })),
   transition("hide <=> show", animate("500ms ease-in"))
]);

