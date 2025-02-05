function saveFeedback() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    if (!name || !email || !feedback) {
        alert("⚠️ Please fill out all fields before submitting.");
        return;
    }

    let content = `💬 Feedback Form Submission\n\n📝 Name: ${name}\n📧 Email: ${email}\n💡 Feedback:\n${feedback}`;

    let blob = new Blob([content], { type: "application/msword" });
    saveAs(blob, "User_Feedback.doc");
    
    alert("✅ Feedback saved as a Word document!");

    document.getElementById("feedbackForm").reset();
}
