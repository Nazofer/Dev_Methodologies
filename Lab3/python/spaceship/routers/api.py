from fastapi import APIRouter
import numpy

router = APIRouter()


@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}

@router.get('/matrix')
def matrix() -> dict:
    first_rows = 10
    first_columns = 10

    second_rows = 10
    second_columns = 10

    if first_columns != second_rows:

        response = {
            'result': 'Error: The number of columns of the first matrix must be equal to the number of rows of the second matrix.'
        }

    else:

        first_matrix = numpy.random.rand(first_rows, first_columns)
        second_matrix = numpy.random.rand(second_rows, second_columns)
        result = numpy.dot(first_matrix, second_matrix)

        response = {
            "matrix_a": first_matrix.tolist(),
            "matrix_b": second_matrix.tolist(),
            "product": result.tolist()
        }

    return response
