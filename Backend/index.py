from flask import (
    Flask,
    render_template
)
import random
import namegenerator
from flask import jsonify
from flask_cors import CORS
# Create the application instance
app = Flask(__name__, template_folder="templates")
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# Create a URL route in our application for "/"


@app.route('/')
def data():
    res = [

        {"month": "Jan",
         "value": random.randint(0, 100)},
         {"month": "Feb",
         "value": random.randint(0, 100)},
         {"month": "Mar",
         "value": random.randint(0, 100)},
         {"month": "Apr",
         "value": random.randint(0, 100)},
         {"month": "May",
         "value": random.randint(0, 100)},
         {"month": "Jun",
         "value": random.randint(0, 100)},
         {"month": "Jul",
         "value": random.randint(0, 100)},
         {"month": "Aug",
         "value": random.randint(0, 100)},
         {"month": "Sep",
         "value": random.randint(0, 100)},
         {"month": "Oct",
         "value": random.randint(0, 100)},
         {"month": "Nov",
         "value": random.randint(0, 100)},
         {"month": "Dec",
         "value": random.randint(0, 100)},

    ]

    return jsonify(res)

@app.route('/table')
def getSomeData():

    res = [

        {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },
         {"name": namegenerator.gen(),
         "sold": random.randint(0, 100),
         "stock":random.randint(0, 100)
         },

    ]

    return jsonify(res)




if __name__ == '__main__':
    app.run(debug=True)
