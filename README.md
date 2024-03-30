TASK 01 
Test Case: 

https://docs.google.com/spreadsheets/d/1kBxWm9VJnu6HmVAITVzHqtukFBRcFC2NKozp92dit_w/edit?usp=sharing

Automation Script (Using Cypress) :


Screen Recorder: https://www.loom.com/share/a2d849af23bd445ba276ed331380d171

Using Only Positive Scenario
describe('template spec', () => {
  it('test1', () => {
    cy.visit("https://techinsightsblog.com/");


    cy.contains("Leave a comment").click();
    cy.get("#comment").type("Abir Arshad1122@@@");
    cy.get("#author").type("Abir Arshad");
    cy.get("#email").type("abirarshad0@gmail.com");
    cy.get("#url").type("https://github.com/abir267");
    cy.get("#wp-comment-cookies-consent").click();
    cy.get("#submit").click();
  })
})
                              TASK 02

Test Case: 

https://docs.google.com/spreadsheets/d/1rLimmuPlpU7CIS19hvo4mWR_Hbw8d-dW_Fp5FfEhNkE/edit?usp=sharing


API Testing Using Postman: 

https://www.loom.com/share/96b2d5cf3df14b56909ab71444b18809

API Keys:

 https://prnt.sc/z5vJjRt8Q1M6

Api Response: 

{
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1711486800,
            "main": {
                "temp": 287.41,
                "feels_like": 286.69,
                "temp_min": 287.34,
                "temp_max": 287.41,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1019,
                "humidity": 69,
                "temp_kf": 0.07
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 54
            },
            "wind": {
                "speed": 3.84,
                "deg": 271,
                "gust": 3.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-26 21:00:00"
        },
        {
            "dt": 1711497600,
            "main": {
                "temp": 286.97,
                "feels_like": 286.21,
                "temp_min": 286.73,
                "temp_max": 286.97,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1019,
                "humidity": 69,
                "temp_kf": 0.24
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 34
            },
            "wind": {
                "speed": 5.44,
                "deg": 277,
                "gust": 5.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-27 00:00:00"
        },
        {
            "dt": 1711508400,
            "main": {
                "temp": 284.68,
                "feels_like": 283.79,
                "temp_min": 284.68,
                "temp_max": 284.68,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1020,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 89
            },
            "wind": {
                "speed": 4.48,
                "deg": 282,
                "gust": 5.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-27 03:00:00"
        },
        {
            "dt": 1711519200,
            "main": {
                "temp": 284.09,
                "feels_like": 283.2,
                "temp_min": 284.09,
                "temp_max": 284.09,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1020,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 3.46,
                "deg": 267,
                "gust": 4.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-27 06:00:00"
        },
        {
            "dt": 1711530000,
            "main": {
                "temp": 283.74,
                "feels_like": 282.87,
                "temp_min": 283.74,
                "temp_max": 283.74,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1020,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.31,
                "deg": 250,
                "gust": 2.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-27 09:00:00"
        },
        {
            "dt": 1711540800,
            "main": {
                "temp": 283.3,
                "feels_like": 282.46,
                "temp_min": 283.3,
                "temp_max": 283.3,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1020,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.91,
                "deg": 183,
                "gust": 2.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-27 12:00:00"
        },
        {
            "dt": 1711551600,
            "main": {
                "temp": 283.59,
                "feels_like": 282.67,
                "temp_min": 283.59,
                "temp_max": 283.59,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1020,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 2.48,
                "deg": 160,
                "gust": 3.02
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-27 15:00:00"
        },
        {
            "dt": 1711562400,
            "main": {
                "temp": 285.77,
                "feels_like": 284.76,
                "temp_min": 285.77,
                "temp_max": 285.77,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1020,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.99,
                "deg": 175,
                "gust": 4.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-27 18:00:00"
        },
        {
            "dt": 1711573200,
            "main": {
                "temp": 288.01,
                "feels_like": 287.38,
                "temp_min": 288.01,
                "temp_max": 288.01,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1019,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.62,
                "deg": 214,
                "gust": 8.34
            },
            "visibility": 10000,
            "pop": 0.07,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-27 21:00:00"
        },
        {
            "dt": 1711584000,
            "main": {
                "temp": 286.65,
                "feels_like": 286.25,
                "temp_min": 286.65,
                "temp_max": 286.65,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1017,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.35,
                "deg": 201,
                "gust": 10.5
            },
            "visibility": 10000,
            "pop": 0.31,
            "rain": {
                "3h": 0.11
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-28 00:00:00"
        },
        {
            "dt": 1711594800,
            "main": {
                "temp": 286.54,
                "feels_like": 286.13,
                "temp_min": 286.54,
                "temp_max": 286.54,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1016,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.34,
                "deg": 199,
                "gust": 12.53
            },
            "visibility": 10000,
            "pop": 0.47,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-28 03:00:00"
        },
        {
            "dt": 1711605600,
            "main": {
                "temp": 285.02,
                "feels_like": 284.46,
                "temp_min": 285.02,
                "temp_max": 285.02,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1017,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.79,
                "deg": 280,
                "gust": 7.62
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.31
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-28 06:00:00"
        },
        {
            "dt": 1711616400,
            "main": {
                "temp": 284.34,
                "feels_like": 283.68,
                "temp_min": 284.34,
                "temp_max": 284.34,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1017,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 4.74,
                "deg": 273,
                "gust": 6.75
            },
            "visibility": 10000,
            "pop": 0.29,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-28 09:00:00"
        },
        {
            "dt": 1711627200,
            "main": {
                "temp": 283.82,
                "feels_like": 283.03,
                "temp_min": 283.82,
                "temp_max": 283.82,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 1017,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 4.17,
                "deg": 270,
                "gust": 6.24
            },
            "visibility": 10000,
            "pop": 0.29,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-28 12:00:00"
        },
        {
            "dt": 1711638000,
            "main": {
                "temp": 283.5,
                "feels_like": 282.71,
                "temp_min": 283.5,
                "temp_max": 283.5,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1018,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 47
            },
            "wind": {
                "speed": 3.37,
                "deg": 283,
                "gust": 4.73
            },
            "visibility": 10000,
            "pop": 0.42,
            "rain": {
                "3h": 0.58
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-28 15:00:00"
        },
        {
            "dt": 1711648800,
            "main": {
                "temp": 285.31,
                "feels_like": 284.28,
                "temp_min": 285.31,
                "temp_max": 285.31,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1019,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 43
            },
            "wind": {
                "speed": 3.03,
                "deg": 275,
                "gust": 4.06
            },
            "visibility": 10000,
            "pop": 0.62,
            "rain": {
                "3h": 0.45
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-28 18:00:00"
        },
        {
            "dt": 1711659600,
            "main": {
                "temp": 286.52,
                "feels_like": 285.3,
                "temp_min": 286.52,
                "temp_max": 286.52,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 1018,
                "humidity": 53,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 38
            },
            "wind": {
                "speed": 4.67,
                "deg": 263,
                "gust": 4.75
            },
            "visibility": 10000,
            "pop": 0.16,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-28 21:00:00"
        },
        {
            "dt": 1711670400,
            "main": {
                "temp": 285.81,
                "feels_like": 284.7,
                "temp_min": 285.81,
                "temp_max": 285.81,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1017,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 5.29,
                "deg": 262,
                "gust": 5.63
            },
            "visibility": 10000,
            "pop": 0.05,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-29 00:00:00"
        },
        {
            "dt": 1711681200,
            "main": {
                "temp": 284.53,
                "feels_like": 283.53,
                "temp_min": 284.53,
                "temp_max": 284.53,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 1017,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.26,
                "deg": 260,
                "gust": 5.72
            },
            "visibility": 10000,
            "pop": 0.03,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-29 03:00:00"
        },
        {
            "dt": 1711692000,
            "main": {
                "temp": 284.3,
                "feels_like": 283.32,
                "temp_min": 284.3,
                "temp_max": 284.3,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 1016,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.95,
                "deg": 244,
                "gust": 3.77
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-29 06:00:00"
        },
        {
            "dt": 1711702800,
            "main": {
                "temp": 283.93,
                "feels_like": 283,
                "temp_min": 283.93,
                "temp_max": 283.93,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 1014,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.07,
                "deg": 207,
                "gust": 4.05
            },
            "visibility": 10000,
            "pop": 0.09,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-29 09:00:00"
        },
        {
            "dt": 1711713600,
            "main": {
                "temp": 283.3,
                "feels_like": 282.46,
                "temp_min": 283.3,
                "temp_max": 283.3,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 1012,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.82,
                "deg": 169,
                "gust": 3.87
            },
            "visibility": 10000,
            "pop": 0.47,
            "rain": {
                "3h": 0.6
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-29 12:00:00"
        },
        {
            "dt": 1711724400,
            "main": {
                "temp": 283.34,
                "feels_like": 282.45,
                "temp_min": 283.34,
                "temp_max": 283.34,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1010,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.77,
                "deg": 151,
                "gust": 6.78
            },
            "visibility": 10000,
            "pop": 0.66,
            "rain": {
                "3h": 1.44
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-29 15:00:00"
        },
        {
            "dt": 1711735200,
            "main": {
                "temp": 284.11,
                "feels_like": 283.14,
                "temp_min": 284.11,
                "temp_max": 284.11,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1008,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.18,
                "deg": 133,
                "gust": 10.05
            },
            "visibility": 10000,
            "pop": 0.9,
            "rain": {
                "3h": 1
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-29 18:00:00"
        },
        {
            "dt": 1711746000,
            "main": {
                "temp": 284.22,
                "feels_like": 283.31,
                "temp_min": 284.22,
                "temp_max": 284.22,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.33,
                "deg": 164,
                "gust": 14.58
            },
            "visibility": 10000,
            "pop": 0.89,
            "rain": {
                "3h": 1.32
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-29 21:00:00"
        },
        {
            "dt": 1711756800,
            "main": {
                "temp": 283.53,
                "feels_like": 282.82,
                "temp_min": 283.53,
                "temp_max": 283.53,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1002,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11,
                "deg": 149,
                "gust": 17.74
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 4.5
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-30 00:00:00"
        },
        {
            "dt": 1711767600,
            "main": {
                "temp": 283.75,
                "feels_like": 282.9,
                "temp_min": 283.75,
                "temp_max": 283.75,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 8,
                "deg": 203,
                "gust": 10.79
            },
            "visibility": 10000,
            "pop": 0.96,
            "rain": {
                "3h": 2.02
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-30 03:00:00"
        },
        {
            "dt": 1711778400,
            "main": {
                "temp": 283.64,
                "feels_like": 282.7,
                "temp_min": 283.64,
                "temp_max": 283.64,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1005,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 61
            },
            "wind": {
                "speed": 5.44,
                "deg": 174,
                "gust": 8.38
            },
            "visibility": 10000,
            "pop": 0.86,
            "rain": {
                "3h": 1.18
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-30 06:00:00"
        },
        {
            "dt": 1711789200,
            "main": {
                "temp": 282.46,
                "feels_like": 279.92,
                "temp_min": 282.46,
                "temp_max": 282.46,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 28
            },
            "wind": {
                "speed": 4.89,
                "deg": 139,
                "gust": 8.31
            },
            "visibility": 10000,
            "pop": 0.66,
            "rain": {
                "3h": 0.5
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-30 09:00:00"
        },
        {
            "dt": 1711800000,
            "main": {
                "temp": 282.5,
                "feels_like": 280.48,
                "temp_min": 282.5,
                "temp_max": 282.5,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 3.74,
                "deg": 105,
                "gust": 5.74
            },
            "visibility": 10000,
            "pop": 0.56,
            "rain": {
                "3h": 0.78
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-30 12:00:00"
        },
        {
            "dt": 1711810800,
            "main": {
                "temp": 282.04,
                "feels_like": 280.07,
                "temp_min": 282.04,
                "temp_max": 282.04,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 3.44,
                "deg": 51,
                "gust": 4.72
            },
            "visibility": 10000,
            "pop": 0.22,
            "rain": {
                "3h": 0.11
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-30 15:00:00"
        },
        {
            "dt": 1711821600,
            "main": {
                "temp": 283.63,
                "feels_like": 282.8,
                "temp_min": 283.63,
                "temp_max": 283.63,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1008,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 6.49,
                "deg": 41,
                "gust": 7.37
            },
            "visibility": 10000,
            "pop": 0.11,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-30 18:00:00"
        },
        {
            "dt": 1711832400,
            "main": {
                "temp": 285.93,
                "feels_like": 284.93,
                "temp_min": 285.93,
                "temp_max": 285.93,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1007,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 4.92,
                "deg": 42,
                "gust": 5.01
            },
            "visibility": 10000,
            "pop": 0.24,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-30 21:00:00"
        },
        {
            "dt": 1711843200,
            "main": {
                "temp": 287.09,
                "feels_like": 286.03,
                "temp_min": 287.09,
                "temp_max": 287.09,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1006,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 52
            },
            "wind": {
                "speed": 5.03,
                "deg": 316,
                "gust": 5.24
            },
            "visibility": 10000,
            "pop": 0.45,
            "rain": {
                "3h": 0.15
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-31 00:00:00"
        },
        {
            "dt": 1711854000,
            "main": {
                "temp": 284.5,
                "feels_like": 283.65,
                "temp_min": 284.5,
                "temp_max": 284.5,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 4.61,
                "deg": 302,
                "gust": 5.59
            },
            "visibility": 10000,
            "pop": 0.52,
            "rain": {
                "3h": 0.39
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-31 03:00:00"
        },
        {
            "dt": 1711864800,
            "main": {
                "temp": 283.82,
                "feels_like": 283.01,
                "temp_min": 283.82,
                "temp_max": 283.82,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 2.42,
                "deg": 317,
                "gust": 3.36
            },
            "visibility": 10000,
            "pop": 0.34,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-31 06:00:00"
        },
        {
            "dt": 1711875600,
            "main": {
                "temp": 283.58,
                "feels_like": 282.74,
                "temp_min": 283.58,
                "temp_max": 283.58,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 0.97,
                "deg": 212,
                "gust": 2.08
            },
            "visibility": 10000,
            "pop": 0.04,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-31 09:00:00"
        },
        {
            "dt": 1711886400,
            "main": {
                "temp": 283.24,
                "feels_like": 282.42,
                "temp_min": 283.24,
                "temp_max": 283.24,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1007,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 1.26,
                "deg": 104,
                "gust": 1.89
            },
            "visibility": 10000,
            "pop": 0.39,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-31 12:00:00"
        },
        {
            "dt": 1711897200,
            "main": {
                "temp": 282.73,
                "feels_like": 280.9,
                "temp_min": 282.73,
                "temp_max": 282.73,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1009,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.47,
                "deg": 105,
                "gust": 4.66
            },
            "visibility": 10000,
            "pop": 0.84,
            "rain": {
                "3h": 1.76
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-31 15:00:00"
        },
        {
            "dt": 1711908000,
            "main": {
                "temp": 284.67,
                "feels_like": 283.84,
                "temp_min": 284.67,
                "temp_max": 284.67,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1010,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 1.57,
                "deg": 37,
                "gust": 2.02
            },
            "visibility": 10000,
            "pop": 0.75,
            "rain": {
                "3h": 0.22
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-31 18:00:00"
        }
    ],
    "city": {
        "id": 5391959,
        "name": "San Francisco",
        "coord": {
            "lat": 37.77,
            "lon": -122.41
        },
        "country": "US",
        "population": 805235,
        "timezone": -25200,
        "sunrise": 1711461781,
        "sunset": 1711506420
    }
}

