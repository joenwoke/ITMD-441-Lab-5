document.addEventListener("DOMContentLoaded", function () {
	const billTotal = document.getElementById("billTotal");
	const tipSlider = document.getElementById("tipSlider");
	const tipPercent = document.getElementById("tipPercent");
	const tipAmount = document.getElementById("tipAmount");
	const totalWithTax = document.getElementById("totalWithTax");
	const totalWithTipTax = document.getElementById("totalWithTipTax");
	const errorMessage= document.getElementById("errorMessage");
	
	function updateValues() {
		let bill = parseFloat(billTotal.value);
		let tip = parseInt(tipSlider.value);
		
		if (isNaN(bill)) {
			errorMsg.textContent = "Please enter a valid number.";
			clearOutputs();
			return;
		} else if (bill < 0) {
			errorMsg.textContent = "Bill cannot be negative.";
			clearOutputs();
			return;
		} else {
			errorMsg.textContent = ""; // Clear error
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
	
	function clearOutputs() {
		tipAmount.value = '';
		totalWithTax.value = '';
		totalWithTipTax.value = '';
	}
	
	billTotal.addEventListener("input", updateValues);
	tipSlider.addEventListener("input", updateValues);
});