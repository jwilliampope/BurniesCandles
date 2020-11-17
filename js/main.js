let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
  event.preventDefault()
  let ourFormData = new FormData(event.target)
  let userFirstName = ourFormData.get("firstName")
  let userEmailAddress = ourFormData.get("emailAddress")
  let updatedHtmlContent = `
  <h2>Thank You, ${userFirstName}</h2>
      <p>We're connected!</p>
      <form class="email-collector" action="#" method="POST" id="Email-Collector">
        <input type="text" required placeholder="First Name" />
        <input type="email" required placeholder="Email" />
        <button class="btn btn-primary" type="submit">Register</button>
      </form>
      <p class="fine-print">Updates will be sent to ${userEmailAddress}</p>
  
  `
  let updatedContentContainer = document.getElementById("Main-Content")
  updatedContentContainer.innerHTML = updatedHtmlContent
})
