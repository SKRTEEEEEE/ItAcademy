if(process.argv.length < 3){
	console.log("You should introduce numbers for execute the sum")
} else {
	const args: string[] = process.argv.slice(2)

	const numbers: number[] = args.map(arg => parseFloat(arg))
	const sum: number = numbers.reduce((acc, num) => acc + num, 0)

	console.log(sum)
}
