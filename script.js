document.addEventListener("DOMContentLoaded", function () {
	const billTotal = document.getElementById("billTotal");
	const tipSlider = document.getElementById("tipSlider");
	const tipPercent = document.getElementById("tipPercent");
	const tipAmount = document.getElementById("tipAmount");
	const totalWithTax = document.getElementById("totalWithTax");
	const totalWithTipTax = document.getElementById("totalWithTipTax");
	
	function updateValues() {
		let bill = parseFloat(billTotal.value);
		let tip = parseInt(tipSlider.value);
		
		if (isNaN(bill) || bill < 0) {
			tipAmount.value = '';
			totalWithTax.value = '';
			totalWithTipTax.value = '';
			return;
		}
		
		tipPercent.textContent = `${tip}%`;
		
		const tax = bill * 0.11;
		const tipAmt = bill * (tip / 100);
		const withTax = bill + tax;
		const finalTotal = withTax + tipAmt;
		
		tipAmount.value = tipAmt.toFixed(2);
		totalWithTax.value = withTax.toFixed(2);
		totalWithTipTax.value = finalTotal.toFixed(2);
	}
	
	billTotal.addEventListener("input", updateValues);
	tipSlider.addEventListener("input", updateValues);
});