console.log('salary');

const employeeList = [];
let monthlySpend = 0;

$(document).ready(onReady);

function onReady() {
  $('.js-click-add').on('click', clickToAdd);
  $('.js-employee-list').on('click', '.js-btn-delete', deleteEmployee);
}

function clickToAdd() {
  const first = $('.js-field-first').val();
  const last = $('.js-field-last').val();
  const id = $('.js-field-id').val();
  const title = $('.js-field-title').val();
  const salary = $('.js-field-salary').val();

  const employee = {
    first,
    last,
    id,
    title,
    salary,
  };
  employeeList.push(employee);
  render();

  console.log(employeeList);
}

function render() {
  console.log('Render');
  $('.js-employee-list').empty();
  let monthTotal = 0;
  for (let i = 0; i < employeeList.length; i++) {
    console.log('Render', employeeList[i]);
    const item = employeeList[i];

    if (item.isDeleted === true) {
    } else {
      $('.js-employee-list').append;
    }

    $('.js-employee-list').append(
      '<tr>' +
        '<td>' +
        item.first +
        '</td>' +
        '<td>' +
        item.last +
        '</td>' +
        '<td>' +
        item.id +
        '</td>' +
        '<td>' +
        item.title +
        '</td>' +
        '<td>' +
        item.salary +
        '</td>' +
        '<td><button class="js-btn-delete">Delete</button></td>' +
        '</tr>'
    );

    $('.js-total-monthly').text(monthTotal);
  }

  totalSalaryCost();

  if (monthlySpend > 20000) {
    $('.js-total-monthly').addClass('over');
  } else {
    $('.js-total-monthly').removeClass('over');
  }
}

function deleteEmployee() {
  $(this).parent().parent().remove();
}

function totalSalaryCost() {
  let totalSalary = 0;
  for (let i = 0; i < employeeList.length; i++) {
    const item = employeeList[i];
    console.log(item);
    totalSalary += parseInt(item.Salary) / 12;
  }
  let monthlySalary = totalSalary.toFixed();
  $('.js-total-monthly').text(monthlySalary);

  $('.js-total-monthly').text(monthTotal);
  if (monthTotal >= 20000) {
    $('.js-total-monthly').css('background-color', 'red');
  } else if (monthTotal < 20000)
    $('.js-total-monthly').css('background-color', 'grey');
  monthlySpend = monthlySalary;
}
