const gradeWeights = {
    "assignments": .55,
    "group_project": .05,
    "quizzes": .1,
    "exams": .2,
    "INTEX": .1,
}

$("#calculate").click(function (e) {
    e.preventDefault();
    let gradeTotal = 0.0;
    gradeTotal += $("#assignments").val() * gradeWeights["assignments"];
    gradeTotal += $("#group-project").val() * gradeWeights["group_project"];
    gradeTotal += $("#quizzes").val() * gradeWeights["quizzes"];
    gradeTotal += $("#exams").val() * gradeWeights["exams"];
    gradeTotal += $("#intex").val() * gradeWeights["INTEX"];
    $("#result").html(gradeTotal.toPrecision(4) * 100 + "%");
});