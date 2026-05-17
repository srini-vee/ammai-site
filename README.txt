Ammai.ai improved static site

Files included:
- index.html
- style.css
- script.js
- birds/ folder for bird photos
- sounds/ folder for bird audio files

Before uploading to GitHub:
1. Put your mother's main image in the main folder and name it ammai.png.
   If your image has a different name, update this line in index.html:
   <img src="ammai.png" ...>

2. Put your bird sound files in /sounds with these names:
   birds1.wav
   birds2.wav
   birds3.wav
   birds4.wav
   birds5.wav

3. Put your bird photos in /birds with these names:
   asian-koel.jpg
   indian-robin.jpg
   red-vented-bulbul.jpg
   coppersmith-barbet.jpg
   purple-sunbird.jpg

4. If your actual birds are different, edit the birds array at the top of script.js.
   Change the name, note, sound file path, and image file path.

How the button works:
- First click: plays one random bird sound and shows the matching bird photo.
- Second click: stops the sound.
- Third click: plays another random bird, avoiding immediate repeat.

The bird photos are sepia-filtered in real time through CSS, so you do not need to manually edit every bird image.
