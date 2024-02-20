const fs = require("fs")
const crypto = require("crypto")
const yargs = require("yargs")
const colors = require("colors")
const ProgressBar = require("progress")

const argv = yargs
	.option("size", {
		alias: "s",
		describe: "Tamanho alvo do arquivo em MB",
		demandOption: true,
		type: "number"
	})
	.option("digits", {
		alias: "d",
		describe: "Quantidade de dígitos nas sequências",
		demandOption: true,
		type: "number"
	})
	.help().argv

function generateRandomSequences(targetSizeMB, digits) {
	const minRange = Math.pow(10, digits - 1)
	const maxRange = Math.pow(10, digits) - 1

	const fileStream = fs.createWriteStream("random_sequences.txt", {
		flags: "a"
	})

	let currentSizeBytes = 0

  const bar = new ProgressBar(
    "Gerando sequências [:bar] :percent :etas",
    {
      total: targetSizeMB * 1024 * 1024,
      width: 30,
      complete: "💀",
      incomplete: " ",
    }
  );

	function writeNextSequence() {
		const randomNumber = crypto.randomInt(minRange, maxRange)
		const currentSequence = randomNumber.toString().padStart(digits, "0") + "\n"
		const sequenceSizeBytes = Buffer.from(currentSequence, "utf-8").length

		if (currentSizeBytes + sequenceSizeBytes <= targetSizeMB * 1024 * 1024) {
			fileStream.write(currentSequence, () => {
				currentSizeBytes += sequenceSizeBytes
        bar.tick(sequenceSizeBytes)
				writeNextSequence()
			})
		} else {
			fileStream.end(() => {
				console.log(
					"\n Sequências numéricas aleatórias geradas e salvas em random_sequences.txt."
						.bgGreen
				)
			})
		}
	}

	writeNextSequence()
}

generateRandomSequences(argv.size, argv.digits)
