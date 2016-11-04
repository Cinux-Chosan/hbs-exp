export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('posts'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
   this.fromRoute('posts.index'),
   this.toRoute('posts.new'),
   this.use('crossFade'),
   this.reverse('crossFade')
 );

   this.transition(
    this.childOf('#liquid-bind-demo'),
    this.use('crossFade')
  );

  this.transition(
  this.hasClass('vehicles'),

  // this makes our rule apply when the liquid-if transitions to the
  // true state.
  this.toValue(true),
  this.use('crossFade', {duration:200}),

  // which means we can also apply a reverse rule for transitions to
  // the false state.
  this.reverse('toLeft', {duration:200})
  );
}
