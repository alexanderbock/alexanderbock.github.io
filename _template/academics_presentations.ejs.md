```{=html}
<div>
<% for (const item of items) { %>
  <div class="tabular">
    <div style="float: right; text-align: right; margin-left: 10px">
      <span>
        <a href="https://www.wikiwand.com/en/<%- item.year %>" class="tabular-year">
          <%- item.year %>
        </a>
      </span>
      <div>
        <% if (item.video) { %>
          <a href="<%- item.video %>">
            <span class="fa fa-video-camera tabular-icon" title="video: <%- item.video %>"></span>
          </a>
        <% } else { %>
          <span class="tabular-icon">&nbsp;</span>
        <% } %>
      </div>
      <span class="tabular-type"><%- item.type %></span>
    </div>
    <div>
      <span class="tabular-first-line"><%- item.title %></span>
    </div>
    <div>
      <span class="tabular-second-line"><%- item.occasion %></span>
    </div>
    <div>
      <span class="tabular-third-line"><%- item.location %></span>
    </div>
  </div>
<% } %>
</div>
```
