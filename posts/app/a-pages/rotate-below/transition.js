import {
  animate,
  stop,
  Promise
} from "liquid-fire";

// arguments are passed directly from use statements in transition rules, e.g.
// this.use('myTransition', arg1, arg2)

export default function(opts = {}) {
  var direction = 1;
  if (opts.direction === 'cw') {
    direction = -1;
  }
  stop(this.oldElement);
  if (this.oldElement) {
    this.oldElement.css('transform-origin', '50% 150%');
  }
  if (this.newElement) {
    this.newElement.css('transform-origin', '50% 150%');
  }
  return Promise.all([
    animate(this.oldElement, {
      rotateZ: -90 * direction + 'deg'
    }, opts),
    animate(this.newElement, {
      rotateZ: ['0deg', 90 * direction + 'deg']
    }, opts),
  ]);
}
