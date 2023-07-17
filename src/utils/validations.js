export function checkABN(ABN) {
  if (!ABN) return "Please enter ABN.";
  return null;
}

export function checkAddress(address) {
  if (!address) return "Please enter address.";
  else if (
    address.length > 12 &&
    address.includes(" ") &&
    address.substring(address.indexOf(" ")).length > 4
  )
    return null;
  return "Please enter full-address.";
}

export function checkDescription(description) {
  if (!description) return "Please enter description.";
  else if (description.length > 20) return null;
  return "Description should contain atleast 20 characters.";
}

export function checkDOB(dob) {
  if (!dob) return "Please select your birthday.";
  return null;
}

export function checkEmail(email) {
  if (!email.length) {
    return "Please enter Email.";
  } else if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
    return null;
  return "Invalid Email.";
}

export function checkEnquiry(enquiry) {
  if (!enquiry) return "Please enter enquiry.";
  else if (enquiry.length > 49) return null;
  return "Your enquiry must contain at least 50 characters";
}

export function checkFirstName(firstName) {
  if (!firstName) return "Please enter your first name.";
  else if (firstName.length > 2) return null;
  return "First name must contain at least 3 characters";
}

export function checkLastName(lastName) {
  if (!lastName) return "Please enter your last name.";
  else if (lastName.length > 2) return null;
  return "Last name must contain 3 characters";
}

export function checkName(name) {
  if (!name) return "Please enter name.";
  else if (
    name.length > 4 &&
    name.includes(" ") &&
    name.substring(name.indexOf(" ")).length > 2
  )
    return null;
  return "Please enter your fullname.";
}

export function checkPassword(password) {
  if (!password) return "Please enter password.";
  else if (password.length > 7) return null;
  return "Password must be 8 characters long.";
}

export function checkCnfPassword(cnfPassword, match) {
  if (!cnfPassword) return "Please Re-enter password.";
  else if (cnfPassword.length > 7 && match) return null;
  return "Passwords do not match";
}

export function checkPhone(phone) {
  if (!phone) return "Please enter Mobile No.";
  else if (phone.slice(0, 1) < 6 || phone.length !== 10)
    return "Invalid Mobile No.";
  return null;
}

export function checkSubject(subject) {
  if (!subject) return "Please enter subject.";
  else if (subject.length < 4)
    return "Subject must be of at least 4 characters.";
  return null;
}

export function checkTagline(tagline) {
  if (!tagline) return "Please enter a tagline.";
  return null;
}

export function checkUserType(userType) {
  if (!userType) return "Please Select user-type.";
  else if (userType === "Customer" || userType === "Tasker") return null;
  return "Invalid user-type.";
}

export function getDate() {
  const date = new Date();

  let day = date.getDate();
  day = day < 10 ? "0" + day : day;

  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;

  const minYear = date.getFullYear() - 100;
  const maxYear = date.getFullYear() - 18;

  return {
    min: `${minYear}-${month}-${day}`,
    max: `${maxYear}-${month}-${day}`,
  };
}

export function checkTitle(title) {
  if (!title) return "Please enter title.";
  return null;
}

export function checkDate(date) {
  if (!date) return "Please select your task date.";
  return null;
}

export function checkTime(time) {
  if (!time) return "Please select your task time.";
  return null;
}

export function checkLocation(location) {
  if (!location) return "Please select Location.";
  return null;
}

export function checkBudget(budget) {
  if (!budget) return "Please select budget.";
  return null;
}

export function checkBudgetType(budgetType) {
  if (!budgetType) return "Please select budget type.";
  return null;
}

export function checkCategory(category) {
  if (!category) return "Please select category.";
  return null;
}

export function checkTaskToBeDone(task) {
  if (!task) return "Please select budget.";
  return null;
}
