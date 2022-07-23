import React from 'react'

function Navbar() {
    return (
        <div class="container mx-auto px-8">
            <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">IDN Campus</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Academic</a></li>
      <li><a>Event</a></li>
      <li><a>PMB</a></li>
      <li><a>Contact Us</a></li>
    </ul>
  </div>
</div>
        </div>
    );
}

export default Navbar;