import * as fp from "fingerpose";

// describe thumbs up gesture 👍
const fistDescription = new fp.GestureDescription('fist');

// thumb:
// - half curled
// - vertical up (best) or diagonal up left / right
fistDescription.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
fistDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.5);
fistDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.5);
fistDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 1.0);
fistDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 1.0);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  fistDescription.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
  fistDescription.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
  fistDescription.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0);
  fistDescription.addDirection(finger, fp.FingerDirection.DiagonalDownLeft, 1.0);
  fistDescription.addDirection(finger, fp.FingerDirection.DiagonalDownRight, 1.0);
}

export default fistDescription;