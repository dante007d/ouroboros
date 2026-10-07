"""2nd-4th year question bank, exactly as supplied by the organisers.
Each: (question, [A, B, C, D], correct letter). Run: python3 senior_source.py senior.js
Options are shuffled per question (seeded) so the correct answer is not always in the
same slot, then levels 1-60 are assigned in order; the OUROBOROS intro stays at level 0."""
import json, random, sys

Q = [
("What is the main difference between HTML and CSS?", ["HTML handles logic, CSS handles databases", "HTML structures content, CSS styles the content", "HTML is for backend, CSS is for frontend", "There is no difference"], "B"),
("Which HTML tag is normally used to create a hyperlink?", ["<link>", "<a>", "<href>", "<url>"], "B"),
("What is the purpose of the href attribute in an <a> tag?", ["It changes the font", "It specifies where the link should take the user", "It creates an image", "It identifies the user"], "B"),
("What is the difference between an id and a class in HTML?", ["They are exactly the same", "id is generally unique, while a class can be applied to multiple elements", "Class is only for JavaScript", "ID is only for images"], "B"),
("Why do we use the <form> element?", ["To display images", "To collect and submit user input", "To create animations", "To connect HTML to CSS"], "B"),
("Which tag would you use for the largest heading?", ["<heading>", "<h6>", "<h1>", "<head>"], "C"),
("What is the purpose of the alt attribute in an image?", ["To change image size", "To provide alternative text describing the image", "To add animation", "To link the image to CSS"], "B"),
("What is semantic HTML?", ["HTML containing only JavaScript", "HTML elements that describe the meaning or role of their content", "HTML without CSS", "HTML used only for databases"], "B"),
("Which is more appropriate for a website's navigation area?", ["<div>", "<nav>", "<text>", "<navigation>"], "B"),
("If you want a button that performs an action when clicked, which HTML element would normally be used?", ["<click>", "<button>", "<action>", "<event>"], "B"),
("What is the purpose of the viewport meta tag in a responsive website?", ["It connects the website to a database", "It helps control how the page is displayed on different devices", "It creates animations", "It adds JavaScript"], "B"),
("Which of the following is an HTML5 semantic element?", ["<div>", "<span>", "<article>", "<font>"], "C"),
("Which HTML tag is used to display an image?", ["<picture>", "<img>", "<image>", "<src>"], "B"),
("What is the problem with using the same id for multiple HTML elements?", ["IDs are intended to uniquely identify elements", "The browser immediately crashes", "CSS stops working completely", "Images will not load"], "A"),
("What is the difference between <div> and <span>?", ["<div> is generally block-level, while <span> is generally inline", "<span> is only used for images", "<div> is only used for databases", "They are the same"], "A"),
("What is the difference between margin and padding?", ["Both are exactly the same", "Margin is outside the element's border; padding is inside", "Padding is outside; margin is inside", "Both change the font"], "B"),
("Which CSS property changes the text color?", ["font-color", "text-color", "color", "foreground"], "C"),
("What is Flexbox mainly useful for?", ["Creating databases", "Arranging and aligning elements in a layout", "Writing backend code", "Storing images"], "B"),
("What is CSS Grid mainly useful for?", ["Creating API requests", "Creating structured two-dimensional layouts", "Managing databases", "Running backend code"], "B"),
("What is responsive web design?", ["Making a website respond to user passwords", "Making a website adapt to different screen sizes and devices", "Making a website load only on computers", "Making the backend faster"], "B"),
("You designed a webpage on a laptop and it looks broken on a mobile phone. What should you check first?", ["Database password", "Responsive CSS and media queries", "Git username", "HTML file name"], "B"),
("What does display: flex do?", ["Deletes the element", "Makes the element a flex container", "Makes the element invisible", "Connects it to a database"], "B"),
("Which property is commonly used to make rounded corners?", ["corner-radius", "border-radius", "radius-border", "round-corner"], "B"),
("Why should a website maintain consistent colors and fonts?", ["It improves UI consistency and user experience", "It makes the database faster", "It prevents all bugs", "It removes the need for HTML"], "A"),
("What is a CSS class selector?", ["A selector beginning with #", "A selector beginning with .", "A selector beginning with @", "A selector beginning with $"], "B"),
("You have three cards on a webpage. You want them to automatically appear side-by-side on a large screen and adjust when the screen becomes smaller. Which approach would be most suitable?", ["Use only <br> tags", "Use Flexbox/Grid with responsive CSS", "Use separate HTML pages for every screen size", "Use only absolute positioning"], "B"),
("A webpage has a very large image that takes up most of the screen. Which change would generally improve the UI?", ["Make the image even larger", "Optimize the image size and use appropriate dimensions", "Add more text over the image", "Remove all CSS"], "B"),
("What is the main difference between UI and UX?", ["UI deals mainly with visual/interface design, while UX focuses on the overall user experience", "UI is backend and UX is database", "UI is only HTML and UX is only CSS", "There is no difference"], "A"),
("You are designing a college attendance dashboard. Which information would be most useful to display prominently?", ["Random animations", "Attendance percentage, present/absent count and relevant attendance details", "Developer's name", "Large decorative images"], "B"),
("What is a wireframe?", ["A database structure", "A basic visual layout or blueprint of a webpage/application", "A programming language", "A Git branch"], "B"),
("Why is consistency important in UI design?", ["Users can understand and navigate the application more easily", "It eliminates backend code", "It automatically improves database performance", "It prevents network errors"], "A"),
("Which design is generally better for a form with many fields?", ["Put everything randomly on one line", "Group related fields logically and provide clear labels", "Remove all labels", "Use only icons without explanation"], "B"),
("A button says \"Submit\" but actually deletes a student's record. What is the main problem?", ["CSS problem", "Poor UI/UX and misleading labeling", "Database normalization", "Git conflict"], "B"),
("Why are loading indicators useful in web applications?", ["They make the database faster", "They tell users that an operation is still in progress", "They replace error messages", "They prevent all bugs"], "B"),
("What should generally happen when an API request fails?", ["Show nothing and leave the user confused", "Handle the error and provide useful feedback to the user", "Close the browser", "Delete the database"], "B"),
("You have two buttons: \"Delete Student\" and \"View Student\". Which should visually require more caution?", ["View Student", "Delete Student", "Both must look identical", "Neither"], "B"),
("What is the purpose of a dashboard in a project?", ["To present important information and actions in one place", "To replace the database", "To replace HTML", "To store Git commits"], "A"),
("Your attendance system has separate pages for students, faculty and reports. What is a good reason for separating these sections?", ["Better organization and easier navigation", "To make the database unnecessary", "To avoid using CSS", "To increase the number of files"], "A"),
("Before asking an AI tool to generate an entire website, what is a good first step?", ["Start generating random code", "Clearly define the requirements, features and page structure", "Delete the project folder", "Create 100 CSS files"], "B"),
("An AI tool generates a webpage that looks good but does not match your project requirements. What should you do?", ["Use it without changes", "Review the requirements and modify the generated result accordingly", "Delete the entire project", "Stop testing the application"], "B"),
("What is the main purpose of a backend in a web application?", ["Only to design the webpage", "Handle server-side logic and data operations", "Change screen brightness", "Replace CSS"], "B"),
("What is an API?", ["A way for different software components to communicate", "A CSS property", "A database table", "A programming language"], "A"),
("Your attendance webpage needs to retrieve existing attendance records. Which HTTP method would normally be used?", ["GET", "POST", "DELETE", "PATCH"], "A"),
("A student submits a new attendance record. Which HTTP method is commonly used?", ["GET", "POST", "DELETE", "HEAD"], "B"),
("Which HTTP status code usually means \"successful request\"?", ["200", "404", "500", "403"], "A"),
("What does a 404 response usually mean?", ["Server is successful", "Requested resource was not found", "Database was deleted", "User logged in"], "B"),
("A student clicks \"Mark Attendance\", but the same attendance record is inserted twice. What is the most likely area you would investigate?", ["Button color", "Whether the request is being sent more than once", "Font size", "HTML heading"], "B"),
("What is SQL primarily used for?", ["Styling websites", "Working with relational databases", "Creating animations", "Managing Git branches"], "B"),
("You want to find all students belonging to the CSE department from a database. Which operation would you primarily use?", ["SELECT with a suitable condition", "DELETE", "INSERT", "DROP"], "A"),
("Which SQL command is used to add a new record?", ["ADD", "INSERT", "CREATE RECORD", "PUSH"], "B"),
("What is the purpose of a primary key in a database table?", ["To uniquely identify a record", "To store passwords only", "To style the database", "To connect CSS to SQL"], "A"),
("What is a foreign key commonly used for?", ["Linking records between related tables", "Styling tables", "Encrypting data", "Creating HTML forms"], "A"),
("Why would an attendance system have separate Student and Attendance tables?", ["To make the UI colorful", "To organize related data properly and reduce unnecessary duplication", "To avoid using JavaScript", "To make HTML shorter"], "B"),
("What is CRUD?", ["Create, Read, Update, Delete", "Copy, Run, Upload, Download", "Create, Render, Upload, Deploy", "Code, Run, Update, Debug"], "A"),
("Your frontend sends data to an API, but the database is not updated. What would you check first?", ["Only the CSS", "API request, response and backend/database errors", "Monitor settings", "GitHub profile"], "B"),
("What is the purpose of a database table?", ["To organize related data into rows and columns", "To design a webpage", "To store CSS styles", "To create Git branches"], "A"),
("Suppose an attendance table contains the same student's information repeated in every attendance record. What could be a better approach?", ["Continue duplicating everything", "Store student information separately and link attendance records to the student", "Delete the attendance table", "Store everything in one large text field"], "B"),
("What is Supabase commonly used for in a web project?", ["Only CSS", "Database and backend-related services", "Only image editing", "Only Git management"], "B"),
("Which database does Supabase primarily use?", ["PostgreSQL", "MongoDB", "MySQL only", "Firebase Database"], "A"),
("You have created a student attendance table in Supabase. Which part of your application would normally request those records?", ["CSS", "Frontend/backend application code through an API", "Image file", "GitHub README"], "B"),
("Why is Supabase useful for student projects?", ["It provides ready-to-use backend services so developers don't need to build everything from scratch", "It replaces HTML", "It automatically writes the entire project", "It is only an image editor"], "A"),
("You add a new column called attendance_percentage to your Supabase table. What does that change primarily affect?", ["Database structure", "CSS styling", "Git branches", "Image resolution"], "A"),
("Your application successfully connects to Supabase, but no student records are displayed. What should you check?", ["Only the webpage color", "Database records, query/API response and frontend data handling", "Keyboard settings", "GitHub profile"], "B"),
("Why is it useful to plan the database structure before building the complete application?", ["It helps determine how data will be stored and related", "It makes CSS unnecessary", "It eliminates the need for testing", "It automatically generates the UI"], "A"),
("An attendance application needs to store Student Name, USN, Subject and Attendance Percentage. Which is the better approach?", ["Store everything as one long text value", "Use properly structured database fields/columns", "Store it only in HTML", "Store it in CSS"], "B"),
("What is Git mainly used for?", ["Version control", "Designing websites", "Creating databases", "Hosting images"], "A"),
("What does git clone do?", ["Deletes a repository", "Copies a remote repository to your local machine", "Deploys the website", "Creates a database"], "B"),
("What does git commit do?", ["Records changes in Git history", "Uploads the website directly to production", "Deletes the repository", "Creates an API"], "A"),
("What does git push do?", ["Downloads changes from GitHub", "Sends local commits to a remote repository", "Deletes local files", "Creates CSS"], "B"),
("What is GitHub mainly used for?", ["Hosting and collaborating on Git repositories", "Designing UI", "Creating databases only", "Running CSS"], "A"),
("What is a Git branch?", ["A separate line of development within a repository", "A database table", "A CSS component", "An image file"], "A"),
("Two developers modify the same part of a file and Git cannot automatically combine their changes. What happened?", ["Runtime error", "Merge conflict", "Database failure", "CSS conflict"], "B"),
("Why is a .gitignore file useful?", ["It tells Git which files should generally not be tracked", "It hides the entire repository", "It deletes unwanted files", "It improves CSS"], "A"),
("Four students are working on the same project. What is the biggest advantage of using Git?", ["Everyone can work on and track changes without manually exchanging project folders", "It automatically writes code", "It replaces the database", "It eliminates the need for testing"], "A"),
("You use an AI tool to generate code for your project. What should you do before adding it to the final project?", ["Copy it without reading", "Understand, test and verify the generated code", "Immediately deploy it", "Delete your previous code"], "B"),
("An AI tool generates a beautiful webpage, but one button doesn't work. What should you do first?", ["Regenerate the entire website", "Inspect the relevant HTML/code and identify what is missing or incorrect", "Delete the database", "Change the Git branch"], "B"),
("Your project works on your laptop, but another team member gets an error after downloading it from GitHub. What should you check first?", ["Whether the required dependencies and project setup are installed", "Their monitor", "Their keyboard", "Their GitHub profile picture"], "A"),
("A button appears correctly on a webpage, but nothing happens when you click it. What would you investigate?", ["The button's associated functionality/code and browser console errors", "Database table colors", "GitHub logo", "Screen brightness"], "A"),
("Your attendance project shows incorrect attendance percentages even though the UI looks correct. Where would you investigate?", ["Only the CSS", "The calculation logic and the data received from the database", "The webpage background", "GitHub's logo"], "B"),
("Your team has completed an attendance management project. Which combination best represents a complete web application?", ["HTML + CSS only", "Frontend + backend/API + database", "GitHub + CSS only", "HTML + Photoshop"], "B"),
]

TOPICS = [(1, 15, "HTML"), (16, 27, "CSS & Layout"), (28, 40, "UI/UX & AI Tools"), (41, 47, "Backend & APIs"),
          (48, 57, "SQL & Databases"), (58, 65, "Supabase"), (66, 74, "Git & GitHub"), (75, 80, "Debugging & Projects")]
topic = lambda n: next(t for a, b, t in TOPICS if a <= n <= b)

assert len(Q) == 80, len(Q)
assert len({q for q, _, _ in Q}) == 80, "duplicate question"
for q, opts, a in Q:
    assert len(opts) == 4 and len(set(opts)) == 4 and a in "ABCD", q

rng = random.Random(2026)
out = [{"id": "PZ-INTRO-001", "lv": 0, "q": "What is the name of the serpent which tries to devour itself?",
        "options": ["OUROBOROS", "BASILISK", "JORMUNGANDR", "LEVIATHAN"], "a": 0, "type": "LORE", "topic": "Lore"}]
rng.shuffle(out[0]["options"]); out[0]["a"] = out[0]["options"].index("OUROBOROS")
for i, (q, opts, a) in enumerate(Q):
    correct = opts["ABCD".index(a)]
    shuffled = opts[:]; rng.shuffle(shuffled)
    out.append({"id": f"S-{i + 1:03d}", "lv": 1 + i * 60 // 80, "q": q, "options": shuffled,
                "a": shuffled.index(correct), "type": "TECH", "topic": topic(i + 1)})
assert {o["lv"] for o in out} == set(range(61))

js = ("// 2nd-4th year question bank, generated by senior_source.py from the organisers' document.\n"
      "// Each entry: options = 4 choices, a = index of the correct option.\n"
      "export const SENIOR = " + json.dumps(out, indent=1, ensure_ascii=False) + ";\n")
open(sys.argv[1] if len(sys.argv) > 1 else "senior.js", "w").write(js)
from collections import Counter
print("OK", len(out), "questions | original answer letters", dict(Counter(a for *_, a in Q)), "| after shuffle", dict(Counter(o["a"] for o in out)))
