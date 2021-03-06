import React, { useEffect } from 'react';
import { Button, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { BecomeaChef } from 'Redux/ActionCreators/ChefSetting';

const ChefProfile = props => {
  const isChef = sessionStorage.getItem('isChef');

  useEffect(() => {}, [props.account.isChef]);
  return (
    <div>
      {!props.account.becomingAChefLoading ? (
        <div className='row my-1'>
          {isChef == 'false' ? (
            <div className='col'>
              <div className='card border-danger'>
                <div className='container'>
                  <div className='clearfix my-1'>
                    <h6 className=' mb-0 text-danger float-left'>
                      Chef Settings
                    </h6>
                    {/*<a href="#" className="card-link text-muted float-right">You have 2 addresses.</a>*/}
                  </div>
                </div>
                <div className='row mx-0'>
                  <div className='col-md-3 my-2 text-center'>
                    {/*<i className="material-icons" style={{fontSize: '120px', color: "#dc3545"}}>location_on</i>*/}
                    <img
                      alt='svgImg'
                      src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjZTc0YzNjIj48cGF0aCBkPSJNNTEuNiwyMi4zNmMtMC44Nzk0OSwwLjAwMDMzIC0xLjYxNzA4LDAuNjY0MDIgLTEuNzA5OTIsMS41Mzg1OWMwLDAgLTAuODYyNDcsOC4wNDAzMyAtMS43MjMzNiwxNi43OTY4OGMtMC44NjA4OSw4Ljc1NjU0IC0xLjcyNjcyLDE4LjAyODQ4IC0xLjcyNjcyLDIxLjIyNDUzYzAsNS45OTI5OSA0LjQ5NjI0LDEwLjc3Mjk3IDEwLjI0MjczLDExLjY3NzE5Yy0wLjA3NDc5LDEuMzI3MjQgLTAuODE5NCwxNC41Mzg0NSAtMS42MzkzOCwyOS43MDAyNGMtMC40MzAwNyw3Ljk1MjE4IC0wLjg1OTc4LDE2LjA2NzIxIC0xLjE4MjUsMjIuNTI0NjFjLTAuMzIyNzIsNi40NTc0IC0wLjU0MDg2LDExLjE0MjkxIC0wLjU0MDg2LDEyLjYzNzk3YzAsNi4xNTQ2MiA1LjAyNTM4LDExLjE4IDExLjE4LDExLjE4YzYuMTU0NjIsMCAxMS4xOCwtNS4wMjUzOCAxMS4xOCwtMTEuMThjMCwtMS4yNzI1NCAtMC4yMTgxOCwtNS43NzIyMiAtMC41NDA4NiwtMTIuMTc3NzNjLTAuMzIyNjgsLTYuNDA1NTEgLTAuNzUyNDUsLTE0LjU1NTA1IC0xLjE4MjUsLTIyLjU3NWMtMC44MjA1NiwtMTUuMzAyMzEgLTEuNTY1NjUsLTI4Ljc3ODQ1IC0xLjYzOTM3LC0zMC4xMTAwOGM1Ljc0NjQ5LC0wLjkwNDIyIDEwLjI0MjczLC01LjY4NDE5IDEwLjI0MjczLC0xMS42NzcxOWMwLC0zLjE5NjA1IC0wLjg2NTgzLC0xMi40Njc5OSAtMS43MjY3MiwtMjEuMjI0NTNjLTAuODYwODksLTguNzU2NTQgLTEuNzIzMzYsLTE2Ljc5Njg4IC0xLjcyMzM2LC0xNi43OTY4OGMtMC4wOTI4NCwtMC44NzQ1OCAtMC44MzA0MywtMS41MzgyNyAtMS43MDk5MiwtMS41Mzg1OXpNMTIyLjEyLDIyLjM2Yy0xMy4yNzkwNywwIC0yNC4wOCwxMC44MDA5MyAtMjQuMDgsMjQuMDh2MzkuNTZjMCw1LjA2OTQ3IDMuNzY2MzQsOS4xMTg1NCA4LjYsOS45NzA2MnY3LjEzNTMxYy0wLjAwOTk4LDAuMDkwNTQgLTAuODU0MjMsNy44MjgxOCAtMS43MDk5MiwxNi4xMjgzNmMtMC40MzAzNCw0LjE3NDMgLTAuODYyMzcsOC40NjkwNiAtMS4xODU4NiwxMS45NjI3M2MtMC4zMjM0OSwzLjQ5MzY4IC0wLjU0NDIyLDYuMDU2MzYgLTAuNTQ0MjIsNy4yNjI5N2MwLDYuMTU0NjIgNS4wMjUzOCwxMS4xOCAxMS4xOCwxMS4xOGM2LjE1NDYyLDAgMTEuMTgsLTUuMDI1MzggMTEuMTgsLTExLjE4YzAsLTIuODAxNCAtMC40MzMxMSwtMTEuNTEyNTcgLTAuODYzMzYsLTE5LjY3OTIyYy0wLjQyODU5LC04LjEzNTE1IC0wLjg1MzM0LC0xNS41NjAxMSAtMC44NTY2NCwtMTUuNjE3NzN2LTguNTYzMDV2LTcwLjUyYy0wLjAwMDA5LC0wLjk0OTg5IC0wLjc3MDExLC0xLjcxOTkxIC0xLjcyLC0xLjcyek01My4xNTIwMywyNS44aDMuNjA3OTd2MjguMzhjLTAuMDA0MzksMC4zMTAxNSAwLjE1ODU2LDAuNTk4NjMgMC40MjY0NSwwLjc1NDk4YzAuMjY3ODksMC4xNTYzNSAwLjU5OTIxLDAuMTU2MzUgMC44NjcxLDBjMC4yNjc4OSwtMC4xNTYzNSAwLjQzMDg0LC0wLjQ0NDg0IDAuNDI2NDUsLTAuNzU0OTh2LTI4LjM4aDUuMTZ2MjguMzhjLTAuMDA0MzksMC4zMTAxNSAwLjE1ODU2LDAuNTk4NjMgMC40MjY0NSwwLjc1NDk4YzAuMjY3ODksMC4xNTYzNSAwLjU5OTIxLDAuMTU2MzUgMC44NjcxLDBjMC4yNjc4OSwtMC4xNTYzNSAwLjQzMDg0LC0wLjQ0NDg0IDAuNDI2NDUsLTAuNzU0OTh2LTI4LjM4aDUuMTZ2MTkuNzhjLTAuMDA0MzksMC4zMTAxNSAwLjE1ODU2LDAuNTk4NjMgMC40MjY0NSwwLjc1NDk4YzAuMjY3ODksMC4xNTYzNSAwLjU5OTIxLDAuMTU2MzUgMC44NjcxLDBjMC4yNjc4OSwtMC4xNTYzNSAwLjQzMDg0LC0wLjQ0NDg0IDAuNDI2NDUsLTAuNzU0OTh2LTE5Ljc4aDMuNjA3OTdjMC4xMzY2NSwxLjI4MjIxIDAuNzc4NDYsNy4yOTQ3MSAxLjU1ODc1LDE1LjIzMTQxYzAuODU5MTEsOC43Mzg0NCAxLjcxMzI4LDE4LjM4NDU2IDEuNzEzMjgsMjAuODg4NTljMCw0Ljc3MDcxIC0zLjgyOTI5LDguNiAtOC42LDguNmMtMC40NzIzNSwwLjAwMDI3IC0wLjkyMzgsMC4xOTQ3NSAtMS4yNDg0NywwLjUzNzg0Yy0wLjMyNDY2LDAuMzQzMDkgLTAuNDkzOTYsMC44MDQ1OCAtMC40NjgxOCwxLjI3NjIyYzAsMCAwLjg2MDExLDE1LjUyMjAyIDEuNzIsMzEuNTU3OTdjMC40Mjk5NSw4LjAxNzk3IDAuODYwMTgsMTYuMTYzMDIgMS4xODI1LDIyLjU2MTU2YzAuMzIyMzIsNi4zOTg1NCAwLjUzNDE0LDExLjIxMDY1IDAuNTM0MTQsMTIuMDA2NDFjMCw0LjI5NjEgLTMuNDQzOSw3Ljc0IC03Ljc0LDcuNzRjLTQuMjk2MSwwIC03Ljc0LC0zLjQ0MzkgLTcuNzQsLTcuNzRjMCwtMS4xMTc2MiAwLjIxMTg2LC02LjAxNzkxIDAuNTM0MTQsLTEyLjQ2NjY0YzAuMzIyMjgsLTYuNDQ4NzMgMC43NTI1NywtMTQuNTYxNTMgMS4xODI1LC0yMi41MTExN2MwLjg1OTg2LC0xNS44OTkyOSAxLjcyLC0zMS4xNDQ3NiAxLjcyLC0zMS4xNDQ3NmMwLjAyNjc0LC0wLjQ3MjIxIC0wLjE0MjEzLC0wLjkzNDU5IC0wLjQ2NjksLTEuMjc4NDNjLTAuMzI0NzcsLTAuMzQzODMgLTAuNzc2NzgsLTAuNTM4NzggLTEuMjQ5NzQsLTAuNTM4OTljLTQuNzcwNzEsMCAtOC42LC0zLjgyOTI5IC04LjYsLTguNmMwLC0yLjUwNDAzIDAuODU0MTcsLTEyLjE1MDE1IDEuNzEzMjgsLTIwLjg4ODU5YzAuNzgwMjksLTcuOTM2NyAxLjQyMjEsLTEzLjk0OTE5IDEuNTU4NzUsLTE1LjIzMTQxek0xMjAuNCwyNi4xNDYwMnY2Ni43MzM5OGgtMTIuMDRjLTMuODE5MDUsMCAtNi44OCwtMy4wNjA5NiAtNi44OCwtNi44OHYtMzkuNTZjMCwtMTAuODA5NTUgOC4zNTIxNCwtMTkuMzc5OCAxOC45MiwtMjAuMjkzOTh6TTcxLjM2NjU2LDQ5Ljg2NjU2Yy0wLjIyODA5LDAuMDAzNTYgLTAuNDQ1NDIsMC4wOTc1OCAtMC42MDQxOCwwLjI2MTM4Yy0wLjE1ODc2LDAuMTYzOCAtMC4yNDU5NSwwLjM4Mzk3IC0wLjI0MjM4LDAuNjEyMDV2My40NGMtMC4wMDQzOSwwLjMxMDE1IDAuMTU4NTYsMC41OTg2MyAwLjQyNjQ1LDAuNzU0OThjMC4yNjc4OSwwLjE1NjM1IDAuNTk5MjEsMC4xNTYzNSAwLjg2NzEsMGMwLjI2Nzg5LC0wLjE1NjM1IDAuNDMwODQsLTAuNDQ0ODQgMC40MjY0NSwtMC43NTQ5OHYtMy40NGMwLjAwMzY0LC0wLjIzMjc1IC0wLjA4NzIxLC0wLjQ1NzAzIC0wLjI1MTgxLC0wLjYyMTYzYy0wLjE2NDYsLTAuMTY0NiAtMC4zODg4OCwtMC4yNTU0NSAtMC42MjE2MywtMC4yNTE4MXpNMTEwLjA4LDk0LjZoMTAuMzJ2OC42aC0xMC4zMnYtMy40NGg3Ljc0YzAuMzEwMTUsMC4wMDQzOSAwLjU5ODYzLC0wLjE1ODU2IDAuNzU0OTgsLTAuNDI2NDVjMC4xNTYzNSwtMC4yNjc4OSAwLjE1NjM1LC0wLjU5OTIxIDAsLTAuODY3MWMtMC4xNTYzNSwtMC4yNjc4OSAtMC40NDQ4NCwtMC40MzA4NCAtMC43NTQ5OCwtMC40MjY0NWgtNy43NHpNMTA5LjkwODY3LDEwNC45MmgxMC41ODUzOWMwLjA3NTc2LDEuMzI4MzIgMC4zODQwNyw2LjczMDEzIDAuNzY5MywxNC4wNDIxOWMwLjQyOTY3LDguMTU3MDIgMC44NTY2NCwxNy4wNzM4NSAwLjg1NjY0LDE5LjQ5NzgxYzAsNC4yOTYxIC0zLjQ0MzksNy43NCAtNy43NCw3Ljc0Yy00LjI5NjEsMCAtNy43NCwtMy40NDM5IC03Ljc0LC03Ljc0YzAsLTAuNjg1MzkgMC4yMDkyNywtMy40NzQ4NiAwLjUzMDc4LC02Ljk0NzE5YzAuMzIxNTEsLTMuNDcyMzMgMC43NDk0OCwtNy43NTgwOCAxLjE3OTE0LC0xMS45MjU3OGMwLjc3ODA2LC03LjU0NzIzIDEuNDE4MzUsLTEzLjM4MDM4IDEuNTU4NzUsLTE0LjY2NzAzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'
                    />
                  </div>
                  <div className='col'>
                    <div className='card-body p-0 my-3 '>
                      <p className='card-text mb-1 text-secondary'>
                        You are not a Chef yet.
                      </p>
                      <p className='card-text '>
                        Become a Chef now. Sell food online.
                      </p>
                      <hr className='mr-3 badge-danger' />
                      <div className='clearfix'>
                        {/*<a href="#" className="card-link float-left  text-muted">Become a Chef now.</a>*/}
                        <Button
                          onClick={() => {
                            props.BecomeaChef();
                          }}
                          color='danger'
                          className='float-right'
                          size='sm'
                        >
                          <strong>Make me Chef</strong>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='col'>
              <div className='card border-danger'>
                <div className='container'>
                  <div className='clearfix my-1'>
                    <h6 className=' mb-0 text-danger float-left'>
                      Chef Settings
                    </h6>
                    {/*<a href="#" className="card-link text-muted float-right">You have 2 addresses.</a>*/}
                  </div>
                </div>
                <div className='row mx-0'>
                  <div className='col-md-3 my-2 text-center'>
                    {/*<i className="material-icons" style={{fontSize: '120px', color: "#dc3545"}}>location_on</i>*/}
                    <img
                      alt='svgImg'
                      src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjZTc0YzNjIj48cGF0aCBkPSJNNTEuNiwyMi4zNmMtMC44Nzk0OSwwLjAwMDMzIC0xLjYxNzA4LDAuNjY0MDIgLTEuNzA5OTIsMS41Mzg1OWMwLDAgLTAuODYyNDcsOC4wNDAzMyAtMS43MjMzNiwxNi43OTY4OGMtMC44NjA4OSw4Ljc1NjU0IC0xLjcyNjcyLDE4LjAyODQ4IC0xLjcyNjcyLDIxLjIyNDUzYzAsNS45OTI5OSA0LjQ5NjI0LDEwLjc3Mjk3IDEwLjI0MjczLDExLjY3NzE5Yy0wLjA3NDc5LDEuMzI3MjQgLTAuODE5NCwxNC41Mzg0NSAtMS42MzkzOCwyOS43MDAyNGMtMC40MzAwNyw3Ljk1MjE4IC0wLjg1OTc4LDE2LjA2NzIxIC0xLjE4MjUsMjIuNTI0NjFjLTAuMzIyNzIsNi40NTc0IC0wLjU0MDg2LDExLjE0MjkxIC0wLjU0MDg2LDEyLjYzNzk3YzAsNi4xNTQ2MiA1LjAyNTM4LDExLjE4IDExLjE4LDExLjE4YzYuMTU0NjIsMCAxMS4xOCwtNS4wMjUzOCAxMS4xOCwtMTEuMThjMCwtMS4yNzI1NCAtMC4yMTgxOCwtNS43NzIyMiAtMC41NDA4NiwtMTIuMTc3NzNjLTAuMzIyNjgsLTYuNDA1NTEgLTAuNzUyNDUsLTE0LjU1NTA1IC0xLjE4MjUsLTIyLjU3NWMtMC44MjA1NiwtMTUuMzAyMzEgLTEuNTY1NjUsLTI4Ljc3ODQ1IC0xLjYzOTM3LC0zMC4xMTAwOGM1Ljc0NjQ5LC0wLjkwNDIyIDEwLjI0MjczLC01LjY4NDE5IDEwLjI0MjczLC0xMS42NzcxOWMwLC0zLjE5NjA1IC0wLjg2NTgzLC0xMi40Njc5OSAtMS43MjY3MiwtMjEuMjI0NTNjLTAuODYwODksLTguNzU2NTQgLTEuNzIzMzYsLTE2Ljc5Njg4IC0xLjcyMzM2LC0xNi43OTY4OGMtMC4wOTI4NCwtMC44NzQ1OCAtMC44MzA0MywtMS41MzgyNyAtMS43MDk5MiwtMS41Mzg1OXpNMTIyLjEyLDIyLjM2Yy0xMy4yNzkwNywwIC0yNC4wOCwxMC44MDA5MyAtMjQuMDgsMjQuMDh2MzkuNTZjMCw1LjA2OTQ3IDMuNzY2MzQsOS4xMTg1NCA4LjYsOS45NzA2MnY3LjEzNTMxYy0wLjAwOTk4LDAuMDkwNTQgLTAuODU0MjMsNy44MjgxOCAtMS43MDk5MiwxNi4xMjgzNmMtMC40MzAzNCw0LjE3NDMgLTAuODYyMzcsOC40NjkwNiAtMS4xODU4NiwxMS45NjI3M2MtMC4zMjM0OSwzLjQ5MzY4IC0wLjU0NDIyLDYuMDU2MzYgLTAuNTQ0MjIsNy4yNjI5N2MwLDYuMTU0NjIgNS4wMjUzOCwxMS4xOCAxMS4xOCwxMS4xOGM2LjE1NDYyLDAgMTEuMTgsLTUuMDI1MzggMTEuMTgsLTExLjE4YzAsLTIuODAxNCAtMC40MzMxMSwtMTEuNTEyNTcgLTAuODYzMzYsLTE5LjY3OTIyYy0wLjQyODU5LC04LjEzNTE1IC0wLjg1MzM0LC0xNS41NjAxMSAtMC44NTY2NCwtMTUuNjE3NzN2LTguNTYzMDV2LTcwLjUyYy0wLjAwMDA5LC0wLjk0OTg5IC0wLjc3MDExLC0xLjcxOTkxIC0xLjcyLC0xLjcyek01My4xNTIwMywyNS44aDMuNjA3OTd2MjguMzhjLTAuMDA0MzksMC4zMTAxNSAwLjE1ODU2LDAuNTk4NjMgMC40MjY0NSwwLjc1NDk4YzAuMjY3ODksMC4xNTYzNSAwLjU5OTIxLDAuMTU2MzUgMC44NjcxLDBjMC4yNjc4OSwtMC4xNTYzNSAwLjQzMDg0LC0wLjQ0NDg0IDAuNDI2NDUsLTAuNzU0OTh2LTI4LjM4aDUuMTZ2MjguMzhjLTAuMDA0MzksMC4zMTAxNSAwLjE1ODU2LDAuNTk4NjMgMC40MjY0NSwwLjc1NDk4YzAuMjY3ODksMC4xNTYzNSAwLjU5OTIxLDAuMTU2MzUgMC44NjcxLDBjMC4yNjc4OSwtMC4xNTYzNSAwLjQzMDg0LC0wLjQ0NDg0IDAuNDI2NDUsLTAuNzU0OTh2LTI4LjM4aDUuMTZ2MTkuNzhjLTAuMDA0MzksMC4zMTAxNSAwLjE1ODU2LDAuNTk4NjMgMC40MjY0NSwwLjc1NDk4YzAuMjY3ODksMC4xNTYzNSAwLjU5OTIxLDAuMTU2MzUgMC44NjcxLDBjMC4yNjc4OSwtMC4xNTYzNSAwLjQzMDg0LC0wLjQ0NDg0IDAuNDI2NDUsLTAuNzU0OTh2LTE5Ljc4aDMuNjA3OTdjMC4xMzY2NSwxLjI4MjIxIDAuNzc4NDYsNy4yOTQ3MSAxLjU1ODc1LDE1LjIzMTQxYzAuODU5MTEsOC43Mzg0NCAxLjcxMzI4LDE4LjM4NDU2IDEuNzEzMjgsMjAuODg4NTljMCw0Ljc3MDcxIC0zLjgyOTI5LDguNiAtOC42LDguNmMtMC40NzIzNSwwLjAwMDI3IC0wLjkyMzgsMC4xOTQ3NSAtMS4yNDg0NywwLjUzNzg0Yy0wLjMyNDY2LDAuMzQzMDkgLTAuNDkzOTYsMC44MDQ1OCAtMC40NjgxOCwxLjI3NjIyYzAsMCAwLjg2MDExLDE1LjUyMjAyIDEuNzIsMzEuNTU3OTdjMC40Mjk5NSw4LjAxNzk3IDAuODYwMTgsMTYuMTYzMDIgMS4xODI1LDIyLjU2MTU2YzAuMzIyMzIsNi4zOTg1NCAwLjUzNDE0LDExLjIxMDY1IDAuNTM0MTQsMTIuMDA2NDFjMCw0LjI5NjEgLTMuNDQzOSw3Ljc0IC03Ljc0LDcuNzRjLTQuMjk2MSwwIC03Ljc0LC0zLjQ0MzkgLTcuNzQsLTcuNzRjMCwtMS4xMTc2MiAwLjIxMTg2LC02LjAxNzkxIDAuNTM0MTQsLTEyLjQ2NjY0YzAuMzIyMjgsLTYuNDQ4NzMgMC43NTI1NywtMTQuNTYxNTMgMS4xODI1LC0yMi41MTExN2MwLjg1OTg2LC0xNS44OTkyOSAxLjcyLC0zMS4xNDQ3NiAxLjcyLC0zMS4xNDQ3NmMwLjAyNjc0LC0wLjQ3MjIxIC0wLjE0MjEzLC0wLjkzNDU5IC0wLjQ2NjksLTEuMjc4NDNjLTAuMzI0NzcsLTAuMzQzODMgLTAuNzc2NzgsLTAuNTM4NzggLTEuMjQ5NzQsLTAuNTM4OTljLTQuNzcwNzEsMCAtOC42LC0zLjgyOTI5IC04LjYsLTguNmMwLC0yLjUwNDAzIDAuODU0MTcsLTEyLjE1MDE1IDEuNzEzMjgsLTIwLjg4ODU5YzAuNzgwMjksLTcuOTM2NyAxLjQyMjEsLTEzLjk0OTE5IDEuNTU4NzUsLTE1LjIzMTQxek0xMjAuNCwyNi4xNDYwMnY2Ni43MzM5OGgtMTIuMDRjLTMuODE5MDUsMCAtNi44OCwtMy4wNjA5NiAtNi44OCwtNi44OHYtMzkuNTZjMCwtMTAuODA5NTUgOC4zNTIxNCwtMTkuMzc5OCAxOC45MiwtMjAuMjkzOTh6TTcxLjM2NjU2LDQ5Ljg2NjU2Yy0wLjIyODA5LDAuMDAzNTYgLTAuNDQ1NDIsMC4wOTc1OCAtMC42MDQxOCwwLjI2MTM4Yy0wLjE1ODc2LDAuMTYzOCAtMC4yNDU5NSwwLjM4Mzk3IC0wLjI0MjM4LDAuNjEyMDV2My40NGMtMC4wMDQzOSwwLjMxMDE1IDAuMTU4NTYsMC41OTg2MyAwLjQyNjQ1LDAuNzU0OThjMC4yNjc4OSwwLjE1NjM1IDAuNTk5MjEsMC4xNTYzNSAwLjg2NzEsMGMwLjI2Nzg5LC0wLjE1NjM1IDAuNDMwODQsLTAuNDQ0ODQgMC40MjY0NSwtMC43NTQ5OHYtMy40NGMwLjAwMzY0LC0wLjIzMjc1IC0wLjA4NzIxLC0wLjQ1NzAzIC0wLjI1MTgxLC0wLjYyMTYzYy0wLjE2NDYsLTAuMTY0NiAtMC4zODg4OCwtMC4yNTU0NSAtMC42MjE2MywtMC4yNTE4MXpNMTEwLjA4LDk0LjZoMTAuMzJ2OC42aC0xMC4zMnYtMy40NGg3Ljc0YzAuMzEwMTUsMC4wMDQzOSAwLjU5ODYzLC0wLjE1ODU2IDAuNzU0OTgsLTAuNDI2NDVjMC4xNTYzNSwtMC4yNjc4OSAwLjE1NjM1LC0wLjU5OTIxIDAsLTAuODY3MWMtMC4xNTYzNSwtMC4yNjc4OSAtMC40NDQ4NCwtMC40MzA4NCAtMC43NTQ5OCwtMC40MjY0NWgtNy43NHpNMTA5LjkwODY3LDEwNC45MmgxMC41ODUzOWMwLjA3NTc2LDEuMzI4MzIgMC4zODQwNyw2LjczMDEzIDAuNzY5MywxNC4wNDIxOWMwLjQyOTY3LDguMTU3MDIgMC44NTY2NCwxNy4wNzM4NSAwLjg1NjY0LDE5LjQ5NzgxYzAsNC4yOTYxIC0zLjQ0MzksNy43NCAtNy43NCw3Ljc0Yy00LjI5NjEsMCAtNy43NCwtMy40NDM5IC03Ljc0LC03Ljc0YzAsLTAuNjg1MzkgMC4yMDkyNywtMy40NzQ4NiAwLjUzMDc4LC02Ljk0NzE5YzAuMzIxNTEsLTMuNDcyMzMgMC43NDk0OCwtNy43NTgwOCAxLjE3OTE0LC0xMS45MjU3OGMwLjc3ODA2LC03LjU0NzIzIDEuNDE4MzUsLTEzLjM4MDM4IDEuNTU4NzUsLTE0LjY2NzAzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'
                    />
                  </div>
                  <div className='col'>
                    <div className='card-body p-0 my-3 '>
                      <p className='card-text '>
                        You Can Now Sell food online.
                      </p>
                      <hr className='mr-3 badge-danger border-danger' />
                      <p className='card-text mb-1 text-danger'>
                        Congrats You Are Now A Chef.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Spinner
          color='danger'
          style={{
            width: '3.5rem',
            height: '3.5rem',
            position: 'relative',
            top: '15vh',
            left: '15vw'
          }}
        />
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    account: state.account
  };
};
const mapDispatchToProps = dispatch => {
  return {
    BecomeaChef: () => {
      dispatch(BecomeaChef());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChefProfile);
