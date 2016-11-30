1. Convert between formats
    * sass-convert Example.scss Example.sass
    * sass-convert Example.sass Example.scss

2. Generate css file from scss
    * sass Example.scss:Example.css

3. Watch for changes
    * sass --watch Example.scss:Example.css
    * sass --watch Directory:CSS --> will create CSS directory (if needed) and watch the whole directory

4. Formatting
    * sass --watch Example.scss:Example.css --style compact
    * sass --watch Example.scss:Example.css --style compressed
    * sass --watch Example.scss:Example.css --style expanded

5. I don't want these stinkin' sourcemaps!
    * sass --watch Example.scss:Example.css --style expanded --sourcemap=none