### Start a process
pm2 start app.js

### List all processes
pm2 list

### Stop a process
pm2 stop app_name_or_id

### Restart a process
pm2 restart app_name_or_id

### Delete a process
pm2 delete app_name_or_id

### Show detailed information about a process
pm2 show app_name_or_id

### Open the PM2 monitoring dashboard
pm2 monit

### Gracefully reload a process without downtime
pm2 reload app_name_or_id

### Save the current process list for automatic restart on reboot
pm2 save

### Generate a startup script for process resurrection on reboot
pm2 startup

### Display logs for a specific process or all processes
pm2 logs [app_name_or_id]

### Update PM2 to the latest version
pm2 update
