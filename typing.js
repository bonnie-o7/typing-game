const paragraphs = [
    "And these medications have a legitimate use. They've helped a lot of people. It's a generational thing. You know teenagers always find a way to abuse something. And why not, right? Being zonked out of your mind is a lot more fun than dealing with your problems.",
    "You know, you're very beautiful. You're also very quiet. And I'm not used to girls being that quiet unless they're medicated. Normally I go out with girls who talk so much you could hook them up to a wind turbine and they could power a small New Hampshire town.",
    "I can't perform under pressure. That's why I never play anything for money, I choke. I could choke tonight. And she works in my office, can you imagine? She goes around telling everyone what happened? Maybe I should cancel, I have a very bad feeling about this.",
    "I will not vanish, you will not scare me. Try to get through it, try to push through it. You were not thinking that I will not do it. They be lovin' someone and I'm another story. Take the next ticket, get the next train. Why would I do it? Anyone'd think that.",
    "Anything that happens, happens. Anything that, in happening, causes something else to happen, causes something else to happen. Anything that, in happening, causes itself to happen again, happens again. It doesn't necessarily do it in chronological order, though."
];

let paragraph_index = 0;
let seconds_left = 45;
let countdown_id = null;

window.onload = function(){
    document.getElementById("paragraph").innerHTML = paragraphs[paragraph_index];
    document.getElementById("timer").innerHTML = seconds_left + " seconds left";
};

function handle_input(characters) {
    if (characters.length <= paragraphs[paragraph_index].length) {
        if (characters != paragraphs[paragraph_index].substr(0, characters.length)) {
            // typing input is wrong
            document.getElementById("paragraph").style.color = "red";
        } else if (characters.length == paragraphs[paragraph_index].length) {
            // typing input matches paragraph
            document.getElementById("paragraph").style.color = "green";
        } else {
            // typing input matches so far
            document.getElementById("paragraph").style.color = "black";
        }
    } else {
        // typing input is longer than paragraph
        document.getElementById("paragraph").style.color = "red";
    }

    timer();
};

function timer() {
    if (countdown_id) {
        return;
    }

    countdown_id = setInterval(function() {
        seconds_left -= 1;
        document.getElementById("timer").innerHTML = seconds_left + " seconds left";
        if (seconds_left == 0) {
            clearInterval(countdown_id);
        }
    }, 1000);
};

function change_paragraph() {
    if (paragraph_index == paragraphs.length - 1) {
        paragraph_index = 0;
    } else {
        paragraph_index += 1;
    }
    document.getElementById("paragraph").innerHTML = paragraphs[paragraph_index];
    reset();
};

function reset() {
    document.getElementById("typing-input").value = "";
    clearInterval(countdown_id);
    countdown_id = null;
    seconds_left = 45;
    document.getElementById("timer").innerHTML = seconds_left + " seconds left";
}