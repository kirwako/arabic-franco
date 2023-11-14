import arabicToFrancoMap from './francoList';

function toFranco(inputStr: string) {
	const convertedString = inputStr.split('').map(char => arabicToFrancoMap[char] || char).join('');

  return convertedString;
}

export default toFranco;
