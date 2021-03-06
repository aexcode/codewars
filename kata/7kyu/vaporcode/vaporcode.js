// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

function vaporcode(string) {
  return string
    .replace(/\s/g, '')
    .split('')
    .map((letter) => letter.toUpperCase())
    .join('  ')
}

vaporcode("Let's go to the movies")
// -> "L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

vaporcode("Why isn't my code working?")
// -> "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
