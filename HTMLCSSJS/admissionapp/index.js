function admission(
  stu_name,
  stu_advance,
  course_name,
  query,
  // age,
  // contact_number,
  // address = {
    
  // }
) {
  const reuired_adv_amount = { for_admission: 1000, for_registration: 500 };
  let admission_amount = reuired_adv_amount.for_admission;
  let registration_amount = reuired_adv_amount.for_registration;


if (query) {
  console.log(`For admission You have to pay ${admission_amount} Rs.`);

  console.log(
    `"For Registration You have to Pay Minimum" ${registration_amount}` + "Rs."
  );
} else {
  if (admission_amount <= stu_advance) {
    console.log("admission is possible");
    console.log("Registration is possible");
  } else {
    console.log(
      `Pay atleat ${
        registration_amount - stu_advance
      } to get done registration`
    );
    console.info(
      `pay atlest ${admission_amount - stu_advance} to complete admission!!`
    );
  }
}}

let stu_name = "vishnu",
  stu_advance = 433,
  course_name = "javascript",
  query = false;
  // age = 18;
  // contact_number=8765456987;
  // address={}

admission(stu_name, stu_advance, course_name, query);
