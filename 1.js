document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("new").value;
  var email = document.getElementById("new8").value;
  var website = document.getElementById("new9").value;
  var imglink = document.getElementById("new10").value;
  var gender = document.querySelector('input[name="Gender"]:checked').value;

  var skills = [];
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  checkboxes.forEach(function(checkbox) {
    var skillLabel = document.querySelector('label[for="' + checkbox.id + '"]');
    if (skillLabel) {
      skills.push(skillLabel.textContent);
    }
  });

  var tablebody = document.getElementById("tablebody");

  var row = document.createElement("tr");

  var descriptionCell = document.createElement("td");
  descriptionCell.textContent = "Name: " + name + ", Email: " + email + ", Website: " + website + ", Gender: " + gender + ", Skills: " + skills.join(", ");
  row.appendChild(descriptionCell);

  var imageCell = document.createElement("td");
  var img = document.createElement("img");
  img.src = imglink;
  imageCell.appendChild(img);
  row.appendChild(imageCell);

  tablebody.appendChild(row);

  document.getElementById("new").value = "";
  document.getElementById("new8").value = "";
  document.getElementById("new9").value = "";
  document.getElementById("new10").value = "";
});
