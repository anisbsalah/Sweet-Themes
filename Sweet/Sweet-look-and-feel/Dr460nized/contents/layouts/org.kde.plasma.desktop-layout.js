var plasma = getApiVersion(1)

// Create Top Panel
const panel = new Panel
panel.location = "top"
panel.alignment = "left"
panel.height = Math.round(gridUnit * 1.5);

// The Kickoff launcher
var launcher = panel.addWidget("org.kde.plasma.kickoff")
launcher.currentConfigGroup = ["General"]
launcher.writeConfig("icon", "distributor-logo-garuda")
launcher.writeConfig("lengthFirstMargin", 7)
launcher.currentConfigGroup = ["Shortcuts"]
launcher.writeConfig("global", "Alt+F1")

// Window buttons
var buttons = panel.addWidget("org.kde.windowbuttons")
buttons.currentConfigGroup = ["General"]
buttons.writeConfig("buttonSizePercentage", 42)
buttons.writeConfig("containmentType", "Plasma")
buttons.writeConfig("inactiveStateEnabled", true)
buttons.writeConfig("lengthFirstMargin", 10)
buttons.writeConfig("lengthLastMargin", 4)
buttons.writeConfig("lengthMarginsLock", false)
buttons.writeConfig("spacing", 6)
buttons.writeConfig("useDecorationMetrics", false)
buttons.writeConfig("visibility", 2)

// Window Title
var title = panel.addWidget("org.kde.windowtitle")
title.currentConfigGroup = ["General"]
title.writeConfig("filterActivityInfo", false)
title.writeConfig("lengthFirstMargin", 7)
title.writeConfig("lengthMarginsLock", false)
title.writeConfig("placeHolder", "Dr460nized KDE 🔥")
title.writeConfig("showIcon", false)
title.writeConfig("filterByScreen", true)

// Window AppMenu
var appmenu = panel.addWidget("org.kde.windowappmenu")
appmenu.currentConfigGroup = ["General"]
appmenu.writeConfig("fillWidth", true)
appmenu.writeConfig("toggleMaximizedOnDoubleClick", true)
appmenu.writeConfig("filterByScreen", true)

// System Tray
panel.addWidget("org.kde.plasma.systemtray")

// Digital Clock
var clock = panel.addWidget("org.kde.plasma.digitalclock")
clock.currentConfigGroup = ["Appearance"]
clock.writeConfig("showDate", false)

// User Switcher
var switcher = panel.addWidget("org.kde.plasma.userswitcher")
switcher.currentConfigGroup = ["General"]
switcher.writeConfig("showFace", true)
switcher.writeConfig("showName", false)
switcher.writeConfig("showTechnicalInfo", true)

// Create bottom panel (Dock)
const dock = new Panel

// Basic Dock Geometry
dock.alignment = "center"
dock.height = Math.round(gridUnit * 2.8);
dock.hiding = "windowscover"
dock.location = "bottom"
dock.maximumLenth = 1000
dock.minimumLength = 250

// Icons-Only Task Manager
var tasks = dock.addWidget("org.kde.plasma.icontasks")
tasks.currentConfigGroup = ["General"]
tasks.writeConfig("fill", false)
tasks.writeConfig("iconSpacing", 2)
tasks.writeConfig("launchers", "applications:garuda-welcome.desktop,applications:org.kde.konsole.desktop,preferred://browser,preferred://filemanager,applications:org.kde.plasma-systemmonitor.desktop,applications:snapper-tools.desktop,applications:systemsettings.desktop,applications:octopi.desktop")
tasks.writeConfig("maxStripes", 1)
tasks.writeConfig("showOnlyCurrentDesktop", false)
tasks.writeConfig("showOnlyCurrentScreen", false)
