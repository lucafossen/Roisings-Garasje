var qnaString = '{\
                    "questions": [\
                        {\
                            "id": 2,\
                            "author": "Gunnhild Vikedalsbrekka Røising",\
                            "profile": "images/blank_female.jpg",\
                            "datetime" : "12.08.2011 16:39",\
                            "text": "Jens, kvifor seier du at me ikkje er gift? Eg har ikkje klart å nå deg på telefon. -Gunnhild",\
                            "responses": [\
                                {"id": 4,\
                                "author": "Jens Eksingetveit Røising",\
                                "profile": "images/meg.jpg",\
                                "datetime" : "13.08.2011 01:22",\
                                "text": "Jeg tar egentlig bare imot forretningshenvendelser her, Gunnhild. Beklager"\
                                }\
                            ]\
                        }\
                    ]\
                }'


var qnaJSON = JSON.parse(qnaString);

document.getElementById('gunnhild_pp').src = qnaJSON.questions[0].profile;
document.getElementById('gunnhild_pa').innerHTML = qnaJSON.questions[0].author;
document.getElementById('gunnhild_dt').innerHTML = qnaJSON.questions[0].datetime;
document.getElementById('gunnhild_pc').innerHTML = qnaJSON.questions[0].text;

document.getElementById('jens_pp').src = qnaJSON.questions[0].responses[0].profile;
document.getElementById('jens_pa').innerHTML = qnaJSON.questions[0].responses[0].author;
document.getElementById('jens_dt').innerHTML = qnaJSON.questions[0].responses[0].datetime;
document.getElementById('jens_pc').innerHTML = qnaJSON.questions[0].responses[0].text;
