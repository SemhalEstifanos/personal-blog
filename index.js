// /5. Create a Course constructor with title, lessons (an array), and completedLessons (array). Add a method markComplete(lesson)
    // that adds the lesson to completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed".
// please do this
// 6:20
function Course(title, lessons,completedLessons,markComplete) {
            this.title = title;
            this.lessons = lessons;
            this.completedLessons = [];
        this.markComplete = function(lesson) {
        
            if (lesson !== this.lessons.at(-1)) {
         this.completedLessons.push(lesson);
            }
        };
        this.getProgress = function() {
            const completed = this.completedLessons.size;
            const total = this.lessons.length;
            return `${completed} out of ${total} lessons completed`;
        };
    };
    const course = new Course('Frontend web', ['Objects', 'Array', 'String', 'Variables', 'Inheritance'])
course.markComplete();
console.log(course.completedLessons);
console.log(course.getProgress());