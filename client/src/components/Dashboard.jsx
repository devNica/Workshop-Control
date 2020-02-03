import React, { Component, Fragment } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12-col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <div className="card shadow">
                                    <div className="card-header font-weight-bold">
                                        DASHBOARD USER
                                    </div>
                                    <div className="card-body">

                                    </div>
                                    <div className="card-footer bg-danger text-white">
                                        <a href="null" className="text-center">Created by Lucas Andres Marsell</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Dashboard;