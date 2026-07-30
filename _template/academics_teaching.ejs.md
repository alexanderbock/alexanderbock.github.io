```{=html}
<div>
  <% for (const teaching of items) { %>
    <div class="tabular">
      <div style="float: right; text-align: right; margin-left: 10px">
        <span>
          <div class="tabular-year"><%- teaching.years.join(", ") %></div>
        </span>
        <span class="tabular-icon">&nbsp;<br /></span>
        <span class="tabular-type"><%- teaching.role %></span>
      </div>
      <div>
        <span class="tabular-first-line"><%- teaching.description %></span>
      </div>
      <div>
        <span class="tabular-second-line"><%- teaching.class %></span>
      </div>
      <div>
        <span class="tabular-third-line"><%- teaching.university %></span>
      </div>
    </div>
  <% } %>
</div>
```
