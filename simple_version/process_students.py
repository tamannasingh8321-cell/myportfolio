
import pandas as pd

SUBJECTS = ["DSA", "Python", "FOE", "CLA"]

students_data = {
    "2K25CSUN01260": {"name": "Bhavishya Choudhary",   "DSA": 78, "Python": 85, "FOE": 72, "CLA": 80},
    "2K25CSUN01262": {"name": "Bhavy Jain",             "DSA": 88, "Python": 91, "FOE": 84, "CLA": 87},
    "2K25CSUN01270": {"name": "Duke Dhawan",            "DSA": 67, "Python": 73, "FOE": 70, "CLA": 68},
    "2K25CSUN01271": {"name": "Ekaksh Jeena",           "DSA": 82, "Python": 79, "FOE": 76, "CLA": 81},
    "2K25CSUN01282": {"name": "Jasleen Kaur Bhinder",   "DSA": 91, "Python": 88, "FOE": 90, "CLA": 89},
    "2K25CSUN01283": {"name": "Jason Sonu Mathew",      "DSA": 64, "Python": 69, "FOE": 66, "CLA": 70},
    "2K25CSUN01284": {"name": "Kali Jindal",            "DSA": 86, "Python": 83, "FOE": 88, "CLA": 85},
    "2K25CSUN01287": {"name": "Kashish Dagar",          "DSA": 72, "Python": 75, "FOE": 71, "CLA": 74},
    "2K25CSUN01291": {"name": "Kumar Vijay",            "DSA": 60, "Python": 65, "FOE": 62, "CLA": 64},
    "2K25CSUN01296": {"name": "Lipisha Chawla",         "DSA": 89, "Python": 92, "FOE": 87, "CLA": 90},
    "2K25CSUN01298": {"name": "Lipika",                 "DSA": 76, "Python": 80, "FOE": 78, "CLA": 77},
    "2K25CSUN01299": {"name": "Naitik",                 "DSA": 68, "Python": 70, "FOE": 69, "CLA": 71},
    "2K25CSUN01302": {"name": "Neeti Ojha",             "DSA": 85, "Python": 88, "FOE": 84, "CLA": 86},
    "2K25CSUN01307": {"name": "Rattan Kumar",           "DSA": 74, "Python": 72, "FOE": 73, "CLA": 75},
    "2K25CSUN01310": {"name": "Kartik Saini",           "DSA": 92, "Python": 90, "FOE": 89, "CLA": 91},
    "2K25CSUN01320": {"name": "Tripti Rawat",           "DSA": 81, "Python": 84, "FOE": 80, "CLA": 83},
    "2K25CSUN01326": {"name": "Yashika Verma",          "DSA": 77, "Python": 79, "FOE": 76, "CLA": 78},
    "2K25CSUN01331": {"name": "Riya Goyal",             "DSA": 88, "Python": 85, "FOE": 87, "CLA": 86},
    "2K25CSUN01332": {"name": "Kanak Kanak",            "DSA": 69, "Python": 72, "FOE": 70, "CLA": 68},
    "2K25CSUN01341": {"name": "Aditya",                 "DSA": 65, "Python": 67, "FOE": 66, "CLA": 64},
    "2K25CSUN01345": {"name": "Tamanna Singh",          "DSA": 95, "Python": 94, "FOE": 93, "CLA": 96},
    "2K25CSUN01347": {"name": "Ippili Sriram",          "DSA": 73, "Python": 75, "FOE": 72, "CLA": 74},
    "2K25CSUN01349": {"name": "Ashish",                 "DSA": 66, "Python": 68, "FOE": 67, "CLA": 69},
    "2K25CSUN01404": {"name": "Marisetty Venkata Ram",  "DSA": 84, "Python": 82, "FOE": 83, "CLA": 85},
    "2K25CSUN01503": {"name": "Pushkar Rai",            "DSA": 79, "Python": 81, "FOE": 78, "CLA": 80},
    "2K25CSUN01506": {"name": "Dhruv",                  "DSA": 71, "Python": 74, "FOE": 73, "CLA": 72},
    "2K25CSUN01508": {"name": "Swasti Thakur",          "DSA": 87, "Python": 89, "FOE": 86, "CLA": 88},
    "2K25CSUN01511": {"name": "Palle Jaswanth Reddy",   "DSA": 62, "Python": 65, "FOE": 63, "CLA": 61},
    "2K25CSUN01512": {"name": "Kanan Satija",           "DSA": 90, "Python": 88, "FOE": 89, "CLA": 91},
    "2K25CSUN01513": {"name": "Gauri",                  "DSA": 83, "Python": 85, "FOE": 82, "CLA": 84},
    "2K25CSUN01516": {"name": "Prince Saini",           "DSA": 70, "Python": 72, "FOE": 71, "CLA": 69},
    "2K25CSUN01519": {"name": "K. Eswar Kumar",         "DSA": 68, "Python": 70, "FOE": 67, "CLA": 66},
    "2K25CSUN01520": {"name": "Rohit Gusain",           "DSA": 75, "Python": 77, "FOE": 74, "CLA": 76},
    "2K25CSUN01524": {"name": "Ojal Sharma",            "DSA": 86, "Python": 88, "FOE": 85, "CLA": 87},
    "2K25CSUN01530": {"name": "Krish Kumar",            "DSA": 72, "Python": 74, "FOE": 73, "CLA": 71},
    "2K25CSUN01531": {"name": "Kangna Chauhan",         "DSA": 89, "Python": 91, "FOE": 88, "CLA": 90},
    "2K25CSUN01532": {"name": "Utkarsh Rawat",          "DSA": 76, "Python": 78, "FOE": 75, "CLA": 77},
    "2K25CSUN01533": {"name": "Ramani Raj",             "DSA": 64, "Python": 66, "FOE": 65, "CLA": 63},
    "2K25CSUN01537": {"name": "Palak Verma",            "DSA": 82, "Python": 84, "FOE": 83, "CLA": 81},
    "2K25CSUN01541": {"name": "Sai Charan",             "DSA": 67, "Python": 69, "FOE": 68, "CLA": 70},
    "2K25CSUN01542": {"name": "Prince Sharma",          "DSA": 73, "Python": 75, "FOE": 74, "CLA": 72},
    "2K25CSUN01543": {"name": "Pratham Saini",          "DSA": 85, "Python": 87, "FOE": 84, "CLA": 86},
    "2K25CSUN01544": {"name": "Nikhil Chandela",        "DSA": 78, "Python": 80, "FOE": 79, "CLA": 77},
    "2K25CSUN01545": {"name": "Kanak",                  "DSA": 69, "Python": 71, "FOE": 70, "CLA": 68},
    "2K25CSUN01546": {"name": "Ansh Gupta",             "DSA": 88, "Python": 90, "FOE": 87, "CLA": 89},
    "2K25CSUN01547": {"name": "Shauryamaan Sachdeva",   "DSA": 74, "Python": 76, "FOE": 75, "CLA": 73},
    "2K25CSUN01548": {"name": "Prince Jadon",           "DSA": 66, "Python": 68, "FOE": 67, "CLA": 65},
    "2K25CSUN01549": {"name": "Shivam Singh",           "DSA": 80, "Python": 82, "FOE": 81, "CLA": 79},
}


def calculate_grade(percentage):
    if percentage >= 80: return "A"
    if percentage >= 60: return "B"
    if percentage >= 40: return "C"
    return "Fail"


def process_data(data):
    # Flatten dict-of-dicts into a list, adding roll number as a column
    rows = [{"roll": roll, **info} for roll, info in data.items()]
    df = pd.DataFrame(rows)
    df["total"]      = df[SUBJECTS].sum(axis=1)
    df["percentage"] = ((df["total"] / (len(SUBJECTS) * 100)) * 100).round(2)
    df["grade"]      = df["percentage"].apply(calculate_grade)
    return df


if __name__ == "__main__":
    df = process_data(students_data)

    print("\n========== Student Report ==========")
    print(df[["roll", "name", "DSA", "Python", "FOE", "CLA", "total", "percentage", "grade"]]
          .to_string(index=False))

    topper = df.loc[df["total"].idxmax()]
    print(f"\nTopper : {topper['name']} ({topper['roll']}) — {topper['total']}/{len(SUBJECTS)*100} ({topper['percentage']}%) — {topper['grade']}")

    print(f"Class Average : {df['percentage'].mean().round(2)}%")
    print("Subject Averages:")
    for sub in SUBJECTS:
        print(f"  {sub}: {df[sub].mean().round(2)}")
