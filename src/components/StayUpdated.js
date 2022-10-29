import React from 'react'

const StayUpdated = () => {
  return (
    <>
        <div className='stay-updated my-3'>
            <div className='row justify-content-md-center'>
                <div className='col-md-6 col-12 py-5'>
                    <div>
                        <h3 className='section-title'>Stay Updated</h3>
                        <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo 
                            ipsum eirmod duo labore labore.</p>
                    </div>
                    <div>
                        <form>
                            <div className="form-row row">
                            <div className="col-8">
                                <input type="text" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="col-4">
                                <button type="button" className="btn btn-danger w-100" data-dismiss="modal">Subscribe Here</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default StayUpdated