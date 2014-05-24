<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Marzipan Admin</title>
  <meta name="viewport" content="width=device-width">

  {{ HTML::style('css/foundation-icons/foundation-icons.css') }}
  {{ HTML::style('css/admin.css') }}

</head>
<body class="admin">

  <header>
    <div id="logo">Marzipan.io</div>

    <nav id="user-nav" class="right">
      <ul>
        <li><a href="">Benutzer Name</a></li>
      </ul>
    </nav>
  </header>

  <div class="clear"></div>

  <div class="side-bar" id="sidebar">
    <nav class="main-nav">
      <ul>
        <li class="dashboard">
          <a href="#"><span><i class="fi-results"></i></span>Übersicht</a>
        </li>
        <li class="sites">
          <a href="#"><span><i class="fi-page-multiple"></i></span>Seiten</a>
          <ul>
            <li><a href="#sites">Seiten</a></li>
            <li><a href="#navigations">Navigation</a></li>
          </ul>
        </li>
        <li class="content">
          <a href="#"><span><i class="fi-monitor"></i></span>Inhalte</a>
          <ul>
            <li><a href="#forum">Forum</a></li>
            <li><a href="#gallery">Gallerie</a></li>
          </ul>
        </li>
        <li class="user">
          <a href="#"><span><i class="fi-results-demographics"></i></span>Benutzer</a>
          <ul>
            <li><a href="#users">Benutzer</a></li>
            <li><a href="#invitations">Einladungen</a></li>
            <li><a href="#roles">Benutzer-Rollen</a></li>
          </ul>
        </li>
        <li class="settings">
          <a href="#"><span><i class="fi-widget"></i></span>Einstellungen</a>
          <ul>
            <li><a href="#basics">Grundeinstellungen</a></li>
            <li><a href="#designs">Design</a></li>
            <li><a href="#settgins">Verwaltung</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>

  <div class="content">
   @yield('content')
  </div>

  <script type="text/template" id="user-list-item">
    <%- firstName %> <%- lastName %>
  </script>


  {{ HTML::script('js/vendor/json2.js') }}
  {{ HTML::script('js/vendor/jquery.js') }}
  {{ HTML::script('js/vendor/underscore.js') }}
  {{ HTML::script('js/vendor/backbone.js') }}
  {{ HTML::script('js/vendor/backbone.marionette.js') }}
  {{ HTML::script('js/sidebarnav.js') }}
  {{ HTML::script('js/marzipan_admin.js') }}
</body>
</html>
