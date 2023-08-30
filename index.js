function stringLength(string) {
  return string.length;
}

function stringLength_test() {
  scenario1 = stringLength('scenario');
  scenario2 = stringLength('');
  scenario3 = stringLength('cat1');
  scenario4 = stringLength("2dog's leach");
  scenario5 = stringLength(' ');

  (scenario1 === 8 ) ? console.log('scenario1: pass') : console.log('scenario1: fail')
  (scenario2 === 0 ) ? console.log('scenario1: pass') : console.log('scenario1: fail')
  (scenario3 === 4 ) ? console.log('scenario1: pass') : console.log('scenario1: fail')
  (scenario4 === 12 ) ? console.log('scenario1: pass') : console.log('scenario1: fail')
  (scenario4 === 1 ) ? console.log('scenario1: pass') : console.log('scenario1: fail')
}
