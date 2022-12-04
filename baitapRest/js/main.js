const class1 = [inpToan, inpLy, inpHoa];
const class2 = [inpVan, inpSu, inpDia, inpEnglish];

const caculateAverage = (classname, alert) => {
  const result = classname.reduce((acc, subject) => {
    return acc + +subject.value;
  }, 0);
  alert.innerHTML = (result / classname.length).toFixed(2);
};

btnKhoi1.addEventListener("click", () => {
  caculateAverage(class1, tbKhoi1);
});

btnKhoi2.addEventListener("click", () => {
  caculateAverage(class2, tbKhoi2);
});
