const gradeWeights = {
    "assignments": .55,
    "group_project": .05,
    "quizzes": .1,
    "exams": .2,
    "INTEX": .1,
}

$("#calculate").click(function (e) {
    // don't refresh the page when the form submits
    e.preventDefault();
    // sum up all the grades (with weights)
    let gradeTotal = 0.0;
    gradeTotal += $("#assignments").val() * gradeWeights["assignments"];
    gradeTotal += $("#group-project").val() * gradeWeights["group_project"];
    gradeTotal += $("#quizzes").val() * gradeWeights["quizzes"];
    gradeTotal += $("#exams").val() * gradeWeights["exams"];
    gradeTotal += $("#intex").val() * gradeWeights["INTEX"];
    // convert answer to percentage and round answer to 2 decimal places
    $("#result").html(Math.round((gradeTotal * 10000)) / 100 + "%");
});