
/**
 * The text is encrypted
 * @autor Johan Alexander Farfán Sierra <johanfarfan25@gmail.com>
 * @return void
 */
function encryptText() {

    var text_list_letters = [];
    var text_encriptet_array = '';
    document.getElementById("contect-image").style.display = 'none';
    document.getElementById("content-text-area").style.display = 'block';
    var text = document.getElementById("textarea2").value;//Se captura el texto

    var new_text_lower_case = text.toLowerCase();//Se convierte todo en minuzculas

    var validation = validateSpecialCharacters(new_text_lower_case);//Validaciones de caracteres
    if (validation) {
        clearText();
    } else {
        var text_list = covertStringToArray(new_text_lower_case, " ");

        text_list.forEach(function (letter_, index) {

            var letters_array = covertStringToArray(letter_, '');
            text_list_letters[index] = letters_array;

            if (index > 0) {
                text_encriptet_array = text_encriptet_array + ' ' + encripterLetter(text_list_letters[index]);
            } else {
                text_encriptet_array = encripterLetter(text_list_letters[index]);
            }

        });

        var text_encriptet_string = covertArrayToString(text_encriptet_array, "");
        swal("En hora buena", 'Texto encriptado con exito', "success");
        document.getElementById("textarea1").value = text_encriptet_string;//Se envia el texto

    }

}

/**
 * DecryptText
 * @autor Johan Alexander Farfán Sierra <johanfarfan25@gmail.com>
 * @return void
 */
function decryptText() {

    var text_list_letters = [];
    var text_encriptet_array = '';

    document.getElementById("contect-image").style.display = 'none';
    document.getElementById("content-text-area").style.display = 'block';

    var text_decrypt = document.getElementById("textarea2").value;//Se captura el texto

    var new_text_lower_case_decrypt = text_decrypt.toLowerCase();//Se convierte todo en minuzculas

    var validation_decrypt = validateSpecialCharacters(new_text_lower_case_decrypt);//Validaciones de caracteres
    if (validation_decrypt) {
        clearText();
    } else {
        var text_list_decrypt = covertStringToArray(new_text_lower_case_decrypt, " ");
        text_encriptet_array = decripterLetter(text_list_decrypt);
        var text_encriptet_string__decrypt = covertArrayToStringDecript(text_encriptet_array);
        swal("En hora buena", 'Texto desencriptado con exito', "success");
        document.getElementById("textarea1").value = text_encriptet_string__decrypt;//Se envia el texto
    }

}

/**
 * Validation of special characters
 * @autor Johan Alexander Farfán Sierra <johanfarfan25@gmail.com>
 * @return void
 */
function validateSpecialCharacters(texto) {
    let special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (special_characters.test(texto)) {
        swal("Error!", '¡No se puede ingresar caracteres especiales como: ' + special_characters + ' !', "error");
        return true;

    }
}

/**
 * clearText
 * @autor Johan Alexander Farfán Sierra <johanfarfan25@gmail.com>
 * @return void
 */
function clearText() {
    document.getElementById("contect-image").style.display = 'block';
    document.getElementById("content-text-area").style.display = 'none';
    document.getElementById("textarea1").value = "";//Text is deleted
    document.getElementById("textarea2").value = "";
}

/**
 * covertStringToArray
 * @autor Johan Alexander Farfán Sierra <johanfarfan25@gmail.com>
 * @return void
 */
function covertStringToArray(text_string, $param) {
    let new_text_array = text_string.split($param);
    return new_text_array;
}

/**
 * encripterLetter
 * @autor Johan Alexander Farfán Sierra <johanfarfan25@gmail.com>
 * @return void
 */
function encripterLetter(letters) {

    var new_list = [];
    var new_letter = "";
    letters.forEach(function (letter, index) {

        switch (letter) {
            case "e":
                new_letter = "enter";
                break;

            case "¡":
                new_letter = "imes";
                break;

            case "a":
                new_letter = "ai";
                break;

            case "o":
                new_letter = "ober";
                break;

            case "u":
                new_letter = "ufat";
                break;

            default:
                new_letter = letter;
                break;
        }

        new_list[index] = new_letter + " ";
        new_letter = "";

    });

    return new_list;

}


/**
 * decripterLetter
 * @autor Johan Alexander Farfán Sierra <johanfarfan25@gmail.com>
 * @return void
 */
function decripterLetter(letters_decrypt) {

    var new_list_decrypt = [];
    var new_letter_decrypt = "";
    letters_decrypt.forEach(function (letter_decrypt, index) {

        switch (letter_decrypt) {
            case "enter":
                new_letter_decrypt = "e";
                break;

            case "imes":
                new_letter_decrypt = "i";
                break;

            case "ai":
                new_letter_decrypt = "a";
                break;

            case "ober":
                new_letter_decrypt = "o";
                break;

            case "ufat":
                new_letter_decrypt = "u";
                break;

            default:
                new_letter_decrypt = letter_decrypt;
                break;
        }

        new_list_decrypt[index] = new_letter_decrypt;
        new_letter_decrypt = "";

    });

    return new_list_decrypt;

}


/**
 * covertArrayToString
 * @autor Johan Alexander Farfán Sierra <johanfarfan25@gmail.com>
 * @return void
 */
function covertArrayToString(array, param) {

    var new_string = array.toString();

    var new_text_to_array = new_string.replace(/,/g, param);

    return new_text_to_array;
}


/**
 * covertArrayToStringDecript
 * @autor Johan Alexander Farfán Sierra <johanfarfan25@gmail.com>
 * @return void
 */
function covertArrayToStringDecript(array) {

    var new_string = '';
    array.forEach(function (field, index) {
        if (field === '') {
            new_string = new_string + " ";
        } else {
            new_string = new_string + field;
        }
    });

    return new_string;
}
