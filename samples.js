// Feb 25


    const companies = [
     {name: "company One", category: "Finance", start: 1981, end: 2004},
     {name: "company Two", category: "Retails", start: 1991, end: 2024},
     {name: "company Three", category: "Retails", start: 2001, end: 2024},
     {name: "company Four", category: "Finance", start: 2011, end: 2021},
     {name: "company Five", category: "Auto", start: 1984, end: 2004},
     {name: "company Six", category: "Finance", start: 1997, end: 2016},
     {name: "company Seven", category: "Auto", start: 1998, end: 2007},
     {name: "company Eight", category: "Retails", start: 2002, end: 2024},
     {name: "company Nine", category: "Retails", start: 2006, end: 2014},
     {name: "company Ten", category: "Finance", start: 2017, end: 2026},
     ];
   
    // normal for loop
    for (let i=0; i <companies.length; i++){
      console.log(companies[i].start);
    }
    // for each
    companies.forEach(company=> console.log(company.start));
    //loop ages and get each element value add to total
    
    const ages = [33,12,55,23,11,77,43,24,89,51];
        let total = 0;
    ages.forEach(age=>total = total + age);
    // loop ages with optional index, ages parameters and update ages content
    ages.forEach((age, index, ages)=>ages[index]=++age); 
    console.log(ages);
    
    // filter
        let adult = [];
    for (let i =0; i<ages.length; i++){
        if (ages[i] >= 18) {
           adult.push(ages[i]);
            }
    }
    console.log(adult);
    //array filter
    let adult1 = ages.filter(age => {
        if (age < 18) {
            return true;
        }
    });
    adult1 = ages.filter(age=> age <18);
    console.log(adult1);
    const retailCompanies=companies.filter(company=>company.category="Retails");
    console.log(retailCompanies)
    
    const retailCompanies=companies.filter(company=>company.category="Retails");
    console.log(retailCompanies);
    const tenYears=companies.filter(company=>company.end-company.start >= 10);
    console.log(tenYears);
    const eightly=companies.filter(company=>company.start >=1980 && company.start <1990);
    console.log(eightly);

   // map
    const testMap = companies.map(company=> `${company.name} [${company.start} - ${company.end}]`);
    console.log(testMap);

    // map

const ages = [33,12,55,23,11,77,43,24,89,51];
const ageMap = ages.map(age=>Math.sqrt(age)).map(age=>age * 2);
console.log(ageMap);

// map

const ages = [33,12,55,23,11,77,43,24,89,51];
//const ageMap = ages.map(age=>Math.sqrt(age)).map(age=>age * 2);
//console.log(ageMap, ages);

// how reducer work in JS
max_value = (a,b)=> a>b ? a:b;
function max_sequence(a) {
  let result = a[0];
  for (let e of a) result = max_value(result,e);
  return result;
}
console.log(max_sequence(ages));

min_value = (a,b)=> a<b ? a:b;
function min_sequence(a) {
  let result = a[0];
  for (let e of a) result = min_value(result,e);
  return result;
}
console.log(min_sequence(ages));

function reduce(a,func) {
    let result = a[0];
    for (let e of a) result = func(result,e);
    return result;
}
console.log(reduce(ages,max_value));
console.log(reduce(ages,min_value));

function reduce1(a,func,init) {
    let result = init;
    for (let e of a) result = func(result,e);
    return result;
}
console.log(reduce1(ages,max_value, -99));
console.log(reduce1(ages,min_value, 9999999));

// js array reducer
const ageSum = ages.reduce((total,age)=>{return total + age},100);
console.log(ageSum);

  // Reduce
    const companies = [
   {name: "company One", category: "Finance", start: 1981, end: 2004},
     {name: "company Two", category: "Retails", start: 1991, end: 2024},
      {name: "company Three", category: "Retails", start: 2001, end: 2024},
       {name: "company Four", category: "Finance", start: 2011, end: 2021},
        {name: "company Five", category: "Auto", start: 1984, end: 2004},
         {name: "company Six", category: "Finance", start: 1997, end: 2016},
          {name: "company Seven", category: "Auto", start: 1998, end: 2007},
           {name: "company Eight", category: "Retails", start: 2002, end: 2024},
            {name: "company Nine", category: "Retails", start: 2006, end: 2014},
             {name: "company Ten", category: "Finance", start: 2017, end: 2026},
             ]
    const totalCompany = companies.reduce((total, company)=>{return total + company.end - company.start},0);
    console.log(totalCompany);
    