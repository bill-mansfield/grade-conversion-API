# grade-conversion-API
Rock climbing grade conversion API

Simple single endpoint API

Input:
    Send your grade, curring grading system and desired grading system.
Output:
    Receive the converted grade in new grading system as a string.

    Node.js
    express.js
    Netlify

    Root:
        https://clever-shaw-65e5d6.netlify.app/.netlify/functions/api/

    Params:
        ?grade = climbing grade
        ?from = define current grading system grade exists in
        ?to = to desired grading system

    Systems:
        french
        australian
        south_african
        uiaa
        hueco
        font
        british
        yds

    Examples:
        https://clever-shaw-65e5d6.netlify.app/.netlify/functions/api/?grade=29&from=australian&to=french // 8a
        https://clever-shaw-65e5d6.netlify.app/.netlify/functions/api/?grade=8a&from=french&to=australian // 29
        https://clever-shaw-65e5d6.netlify.app/.netlify/functions/api/?grade=5.12a&from=yds&to=british // E4 6b
