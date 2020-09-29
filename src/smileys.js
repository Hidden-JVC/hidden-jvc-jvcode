const smileys = [
    {
        code: ':)', value: '1', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':question:', value: '2', ext: 'gif', width: '26', height: '24'
    },
    {
        code: ':g)', value: '3', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':d)', value: '4', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':cd:', value: '5', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':globe:', value: '6', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':p)', value: '7', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':malade:', value: '8', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':pacg:', value: '9', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':pacd:', value: '10', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':noel:', value: '11', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':o))', value: '12', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':snif2:', value: '13', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':-(', value: '14', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':-((', value: '15', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':mac:', value: '16', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':gba:', value: '17', ext: 'gif', width: '16', height: '12'
    },
    {
        code: ':hap:', value: '18', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':nah:', value: '19', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':snif:', value: '20', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':mort:', value: '21', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':ouch:', value: '22', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':-)))', value: '23', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':content:', value: '24', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':nonnon:', value: '25', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':cool:', value: '26', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':sleep:', value: '27', ext: 'gif', width: '23', height: '26'
    },
    {
        code: ':doute:', value: '28', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':hello:', value: '29', ext: 'gif', width: '45', height: '41'
    },
    {
        code: ':honte:', value: '30', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':-p', value: '31', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':lol:', value: '32', ext: 'gif', width: '37', height: '44'
    },
    {
        code: ':non2:', value: '33', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':monoeil:', value: '34', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':non:', value: '35', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':ok:', value: '36', ext: 'gif', width: '24', height: '16'
    },
    {
        code: ':oui:', value: '37', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':rechercher:', value: '38', ext: 'gif', width: '50', height: '34'
    },
    {
        code: ':rire:', value: '39', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':-d', value: '40', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':rire2:', value: '41', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':salut:', value: '42', ext: 'gif', width: '46', height: '41'
    },
    {
        code: ':sarcastic:', value: '43', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':up:', value: '44', ext: 'gif', width: '37', height: '42'
    },
    {
        code: ':(', value: '45', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':-)', value: '46', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':peur:', value: '47', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':bye:', value: '48', ext: 'gif', width: '44', height: '42'
    },
    {
        code: ':dpdr:', value: '49', ext: 'gif', width: '64', height: '44'
    },
    {
        code: ':fou:', value: '50', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':gne:', value: '51', ext: 'gif', width: '65', height: '46'
    },
    {
        code: ':dehors:', value: '52', ext: 'gif', width: '58', height: '57'
    },
    {
        code: ':fier:', value: '53', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':coeur:', value: '54', ext: 'gif', width: '21', height: '20'
    },
    {
        code: ':rouge:', value: '55', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':sors:', value: '56', ext: 'gif', width: '50', height: '34'
    },
    {
        code: ':ouch2:', value: '57', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':merci:', value: '58', ext: 'gif', width: '44', height: '40'
    },
    {
        code: ':svp:', value: '59', ext: 'gif', width: '50', height: '39'
    },
    {
        code: ':ange:', value: '60', ext: 'gif', width: '31', height: '24'
    },
    {
        code: ':diable:', value: '61', ext: 'gif', width: '35', height: '20'
    },
    {
        code: ':gni:', value: '62', ext: 'gif', width: '16', height: '27'
    },
    {
        code: ':spoiler:', value: '63', ext: 'gif', width: '50', height: '34'
    },
    {
        code: ':hs:', value: '64', ext: 'gif', width: '51', height: '32'
    },
    {
        code: ':desole:', value: '65', ext: 'gif', width: '47', height: '39'
    },
    {
        code: ':fete:', value: '66', ext: 'gif', width: '26', height: '21'
    },
    {
        code: ':sournois:', value: '67', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':hum:', value: '68', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':bravo:', value: '69', ext: 'gif', width: '16', height: '17'
    },
    {
        code: ':banzai:', value: '70', ext: 'gif', width: '49', height: '42'
    },
    {
        code: ':bave:', value: '71', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':pf:', value: 'pf', ext: 'gif', width: '16', height: '16'
    },
    {
        code: ':play:', value: 'play', ext: 'gif', width: '19', height: '28'
    },
    {
        code: ':cute:', value: 'nyu', ext: 'gif', width: '16', height: '17'
    },
    {
        code: ':loveyou:', value: 'loveyou', ext: 'gif', width: '64', height: '30'
    },
    {
        code: ':hapoelparty:', value: 'hapoelparty', ext: 'gif', width: '45', height: '27'
    },
    {
        code: ':fish:', value: 'fish', ext: 'png', width: '16', height: '16'
    }
];

module.exports = smileys;
