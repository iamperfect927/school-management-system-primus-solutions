from starlette.testclient import TestClient

from app import create_app

app = create_app()

client = TestClient(app)

def test_get_students():
    response = client.get("api/students")
    print(dir(response))
    assert response.status_code == 200
    assert response.headers["content-type"] == "application/json"
    # assert response.json() == [ { "first_name": "Johnfhdh", "last_name": "Doe", "email": "john.doe@example.com", "date_of_birth": "2005-03-25" }]
    print("Status Code:", response.status_code)
    print("Content-Type:", response.headers.get("content-type")) # Check the content-type header
    print("Response JSON:", response.json()) # Check the JSON response

# def test_get_student_by_id():
#     # Test for a valid student ID
#     student_id = 1
#     response = client.get(f"/api/students/{student_id}")
    
#     assert response.status_code == 200
#     assert response.headers["content-type"] == "application/json"
    
#     expected_student = {"name": "John Doe", "date_of_birth": "2000-01-01"}
#     assert response.json() == expected_student

#     # Test for an invalid student ID
#     invalid_student_id = 999
#     response = client.get(f"/api/students/{invalid_student_id}")
    
#     assert response.status_code == 404
#     assert response.json() == {"detail": "Student not found"}

#     print("Status Code:", response.status_code)
#     print("Response JSON:", response.json())

# def test_print_routes():
#     for route in app.routes:
#         print(route.path)
