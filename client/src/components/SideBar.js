import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (

            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <a href="null" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                        style={{ opacity: '0.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>


                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="info">
                            <a href="null" className="d-block">Lucas Andres Marsell</a>
                        </div>
                    </div>

                    {/* SIDE BAR MENU */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item has-treeview menu-open">
                                <a href="null" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>Dashboard <i className="right fas fa-angle-left"></i></p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="/dashboard" className="nav-link active">
                                            {/* <i class="far fa-circle nav-icon"></i> */}
                                            <p>Dashboard</p>
                                        </a>
                                    </li> {/*
                                    <li class="nav-item">
                                        <a href="./index2.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Dashboard v2</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="./index3.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Dashboard v3</p>
                                        </a>
                                    </li> */}
                                </ul>
                            </li>

                            {/* WIDGET */}
                            {/* <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>Widgets<span className="right badge badge-danger">New</span></p>
                                </a>
                            </li> */}


                            {/* <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>Layout Options<i className="fas fa-angle-left right"></i><span className="badge badge-info right">6</span></p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Top Navigation</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Top Navigation + Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/boxed.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Boxed</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Navbar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-footer.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Footer</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Collapsed Sidebar</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}

                            <li className="nav-item has-treeview">
                                <a href="null" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>Charts<i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                {/* <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="pages/charts/chartjs.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>ChartJS</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/charts/flot.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Flot</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/charts/inline.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Inline</p>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>


                            <li className="nav-item has-treeview">
                                <a href="null" className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
                                    <p>UI Elements<i className="fas fa-angle-left right"></i></p>
                                </a>
                                {/* <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="pages/UI/general.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>General</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/UI/icons.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Icons</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/UI/buttons.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Buttons</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/UI/sliders.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Sliders</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/UI/modals.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Modals & Alerts</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/UI/navbar.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Navbar & Tabs</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/UI/timeline.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Timeline</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/UI/ribbons.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Ribbons</p>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>


                            <li className="nav-item has-treeview">
                                <a href="null" className="nav-link">
                                    <i className="nav-icon fas fa-edit"></i>
                                    <p>Forms<i className="fas fa-angle-left right"></i></p>
                                </a>
                                {/* <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="pages/forms/general.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>General Elements</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/forms/advanced.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Advanced Elements</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/forms/editors.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Editors</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/forms/validation.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Validation</p>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="null" className="nav-link">
                                    <i className="nav-icon fas fa-table"></i>
                                    <p>Tables<i className="fas fa-angle-left right"></i></p>
                                </a>
                                {/* <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="pages/tables/simple.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Simple Tables</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/tables/data.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>DataTables</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/tables/jsgrid.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>jsGrid</p>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>


                            {/* <li className="nav-header">EXAMPLES</li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt"></i>
                                    <p>Calendar<span className="badge badge-info right">2</span></p>
                                </a>
                            </li> */}

                            <li className="nav-item">
                                <a href="null" className="nav-link">
                                    <i className="nav-icon far fa-image"></i>
                                    <p> Gallery</p>
                                </a>
                            </li>
                            {/* <li class="nav-item has-treeview">
                                <a href="#" class="nav-link">
                                    <i class="nav-icon far fa-envelope"></i>
                                    <p>Mailbox<i class="fas fa-angle-left right"></i></p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="pages/mailbox/mailbox.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Inbox</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/mailbox/compose.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Compose</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/mailbox/read-mail.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Read</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}


                            <li className="nav-item has-treeview">
                                <a href="null" className="nav-link">
                                    <i className="nav-icon fas fa-book"></i>
                                    <p>Pages<i className="fas fa-angle-left right"></i></p>
                                </a>
                                {/* <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="pages/examples/invoice.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Invoice</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/examples/profile.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Profile</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/examples/e_commerce.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>E-commerce</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/examples/projects.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Projects</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/examples/project_add.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Project Add</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/examples/project_edit.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Project Edit</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/examples/project_detail.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Project Detail</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pages/examples/contacts.html" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Contacts</p>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>

                        </ul>
                    </nav>

                </div>

            </aside>
        );
    }
}

export default SideBar;