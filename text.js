setcpm(120/2);

//drums
$: sound("<[bd sd], [lt sd]>/2")
  .bank("9000")
  .lpf(500)
  .room(1)
  .orbit(1)
  .off(1/16, x=>x.add(12).room(0));

//lead
$: every(6, y=>y.rev(), 
  n("<[13 10] [14 11]> 2, [<[13 10] [14 11]> 2] [5 7]")
  .scale("C:minor")
  .sound("gm_pad_poly")
  .room(.7)
  .orbit(2));

//bass
$: every(8, z=>z.rev(), 
  n("[10 9 11]/3 [g3 b3 d4], [5, 7, 9]")
  .scale("C:major")
  .sound("gm_pad_sweep")
  .pan("<0 .3 .6 1 .8 .6 .3 >")
  .room(.6)
  .lpf(700)
  .orbit(3));

//bass
$: n("[2*2, ~ 6]*<1 [3 6]>")
  .sound("gm_contrabass")
  .lpf(700);
