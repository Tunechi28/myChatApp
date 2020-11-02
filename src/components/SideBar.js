import React from 'react';
import * as Icon from 'react-feather';

const SideBar = () => {
    return(
        <div className="sidebar">
      <div className="sidebar-header">
        <div>
          <a href="../index.html" className="sidebar-logo"><span>cassie</span></a>
          <small className="sidebar-logo-headline">Responsive Dashboard Template</small>
        </div>
      </div>
      <div id="dpSidebarBody" className="sidebar-body">
        <ul className="nav nav-sidebar">
          <li className="nav-label"><label className="content-label">Template Pages</label></li>
          <li className="nav-item">
            <a href="" className="nav-link with-sub"> <Icon.Box/> Dashboard </a>
            <nav className="nav nav-sub">
              <a href="dashboard-one.html" className="nav-sub-link">Analytics &amp; Monitoring</a>
              <a href="dashboard-two.html" className="nav-sub-link">Projects &amp; Web Services</a>
              <a href="dashboard-three.html" className="nav-sub-link">Blog &amp; Social Media</a>
            </nav>
          </li>
          <li className="nav-item show">
            <a href="" className="nav-link with-sub active"><Icon.Layout/> App Pages</a>
            <nav className="nav nav-sub">
              <a href="app-calendar.html" className="nav-sub-link">Calendar</a>
              <a href="app-chat.html" className="nav-sub-link active">Chat</a>
              <a href="app-mail.html" className="nav-sub-link">Mail</a>
            </nav>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link with-sub"><Icon.Lock/> Authentication</a>
            <nav className="nav nav-sub">
              <a href="page-signin.html" className="nav-sub-link">Sign In</a>
              <a href="page-signup.html" className="nav-sub-link">Sign Up</a>
              <a href="page-forgot.html" className="nav-sub-link">Forgot Password</a>
            </nav>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link with-sub"><Icon.XCircle/> Error Pages</a>
            <nav className="nav nav-sub">
              <a href="page-404.html" className="nav-sub-link">Page Not Found</a>
              <a href="page-500.html" className="nav-sub-link">Internal Server Error</a>
              <a href="page-503.html" className="nav-sub-link">Service Unavailable</a>
              <a href="page-505.html" className="nav-sub-link">Forbidden Access</a>
            </nav>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link with-sub"><Icon.User/> User Pages</a>
            <nav className="nav nav-sub">
              <a href="page-profile.html" className="nav-sub-link">User Profile</a>
              <a href="page-timeline.html" className="nav-sub-link">Timeline</a>
              <a href="page-people.html" className="nav-sub-link">People</a>
              <a href="page-settings.html" className="nav-sub-link">Profile Settings</a>
            </nav>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link with-sub"><Icon.FileText/> Extras</a>
            <nav className="nav nav-sub">
              <a href="page-invoice.html" className="nav-sub-link">Invoice</a>
              <a href="page-pricing.html" className="nav-sub-link">Pricing</a>
            </nav>
          </li>
          <li className="nav-label"><label className="content-label">UI Design Library</label></li>
          <li className="nav-item">
            <a href="" className="nav-link with-sub"><Icon.Book/> Content</a>
            <nav className="nav nav-sub">
              <a href="../components/con-grid.html" className="nav-sub-link">Grid System</a>
              <a href="../components/con-icons.html" className="nav-sub-link">Icons</a>
              <a href="../components/con-images.html" className="nav-sub-link">Images</a>
              <a href="../components/con-typography.html" className="nav-sub-link">Typography</a>
            </nav>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link with-sub"><Icon.Layers/> Components</a>
            <nav className="nav nav-sub">
              <a href="../components/com-accordion.html" className="nav-sub-link">Accordion</a>
              <a href="../components/com-alerts.html" className="nav-sub-link">Alerts</a>
              <a href="../components/com-avatar.html" className="nav-sub-link">Avatar</a>
              <a href="../components/com-badge.html" className="nav-sub-link">Badge</a>
              <a href="../components/com-breadcrumbs.html" className="nav-sub-link">Breadcrumbs</a>
              <a href="../components/com-buttons.html" className="nav-sub-link">Buttons</a>
              <a href="../components/com-button-groups.html" className="nav-sub-link">Button Groups</a>
              <a href="../components/com-cards.html" className="nav-sub-link">Cards</a>
              <a href="../components/com-carousel.html" className="nav-sub-link">Carousel</a>
              <a href="../components/com-collapse.html" className="nav-sub-link">Collapse</a>
              <a href="../components/com-dropdown.html" className="nav-sub-link">Dropdown</a>
              <a href="../components/com-list-group.html" className="nav-sub-link">List Group</a>
              <a href="../components/com-marker.html" className="nav-sub-link">Marker</a>
              <a href="../components/com-media-object.html" className="nav-sub-link">Media Object</a>
              <a href="../components/com-modal.html" className="nav-sub-link">Modal</a>
              <a href="../components/com-navs.html" className="nav-sub-link">Navs</a>
              <a href="../components/com-navbar.html" className="nav-sub-link">Navbar</a>
              <a href="../components/com-off-canvas.html" className="nav-sub-link">Off-Canvas</a>
              <a href="../components/com-pagination.html" className="nav-sub-link">Pagination</a>
              <a href="../components/com-placeholder.html" className="nav-sub-link">Placeholder</a>
              <a href="../components/com-popovers.html" className="nav-sub-link">Popovers</a>
							<a href="../components/com-progress.html" className="nav-sub-link">Progress</a>
              <a href="../components/com-steps.html" className="nav-sub-link">Steps</a>
              <a href="../components/com-scrollbar.html" className="nav-sub-link">Scrollbar</a>
              <a href="../components/com-scrollspy.html" className="nav-sub-link">Scrollspy</a>
              <a href="../components/com-spinners.html" className="nav-sub-link">Spinners</a>
              <a href="../components/com-tab.html" className="nav-sub-link">Tab</a>
              <a href="../components/com-toast.html" className="nav-sub-link">Toast </a>
              <a href="../components/com-tooltips.html" className="nav-sub-link">Tooltips</a>
              <a href="../components/com-table-basic.html" className="nav-sub-link">Table Basic</a>
              <a href="../components/com-table-advanced.html" className="nav-sub-link">Table (Datatable)</a>
            </nav>
          </li>
          <li class="nav-item">
            <a href="" className="nav-link with-sub"><Icon.Monitor/> Utilities</a>
            <nav class="nav nav-sub">
              <a href="../components/util-animation.html" className="nav-sub-link">Animation</a>
              <a href="../components/util-background.html" className="nav-sub-link">Background</a>
              <a href="../components/util-border.html" className="nav-sub-link">Border</a>
              <a href="../components/util-display.html" className="nav-sub-link">Display</a>
              <a href="../components/util-divider.html" className="nav-sub-link">Divider</a>
              <a href="../components/util-flex.html" className="nav-sub-link">Flex</a>
              <a href="../components/util-height.html" className="nav-sub-link">Height</a>
              <a href="../components/util-margin.html" className="nav-sub-link">Margin</a>
              <a href="../components/util-padding.html" className="nav-sub-link">Padding</a>
              <a href="../components/util-position.html" className="nav-sub-link">Position</a>
              <a href="../components/util-typography.html" className="nav-sub-link">Typography</a>
              <a href="../components/util-width.html" className="nav-sub-link">Width</a>
              <a href="../components/util-extras.html" className="nav-sub-link">Extras</a>
            </nav>
          </li>
          <li class="nav-item">
            <a href="" className="nav-link with-sub"><Icon.LifeBuoy/> Forms</a>
            <nav className="nav nav-sub">
              <a href="../components/form-elements.html" className="nav-sub-link">Form Elements</a>
              <a href="../components/form-input-group.html" className="nav-sub-link">Input Group</a>
              <a href="../components/form-input-tags.html" className="nav-sub-link">Input Tags</a>
              <a href="../components/form-input-masks.html" className="nav-sub-link">Input Masks</a>
              <a href="../components/form-validation.html" className="nav-sub-link">Form Validation</a>
              <a href="../components/form-wizard.html" className="nav-sub-link">Form Wizard</a>
              <a href="../components/form-text-editor.html" className="nav-sub-link">Text Editor</a>
              <a href="../components/form-rangeslider.html" className="nav-sub-link">Range Slider</a>
              <a href="../components/form-datepicker.html" className="nav-sub-link">Date Pickers</a>
              <a href="../components/form-select2.html" className="nav-sub-link">Select2</a>
              <a href="../components/form-search.html" className="nav-sub-link">Search</a>
            </nav>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link with-sub"><Icon.PieChart/> Charts</a>
            <nav className="nav nav-sub">
              <a href="../components/chart-flot.html" className="nav-sub-link">Flot</a>
              <a href="../components/chart-chartjs.html" className="nav-sub-link">ChartJS</a>
              <a href="../components/chart-peity.html" className="nav-sub-link">Peity</a>
              <a href="../components/chart-sparkline.html" className="nav-sub-link">Sparkline</a>
              <a href="../components/chart-morris.html" className="nav-sub-link">Morris</a>
            </nav>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link with-sub"><Icon.MapPin/> Maps</a>
            <nav className="nav nav-sub">
              <a href="../components/map-google.html" className="nav-sub-link">Google Maps</a>
              <a href="../components/map-leaflet.html" className="nav-sub-link">Leaflet Maps</a>
              <a href="../components/map-vector.html" className="nav-sub-link">Vector Maps</a>
            </nav>
          </li>
        </ul>

        <hr className="mg-t-30 mg-b-25"/>

        <ul className="nav nav-sidebar">
          <li className="nav-item"><a href="themes.html" className="nav-link"><Icon.Aperture/> Themes</a></li>
          <li className="nav-item"><a href="../docs.html" className="nav-link"><Icon.HelpCircle/> Documentation</a></li>
        </ul>


      </div>
    </div>
    )
}

export default SideBar