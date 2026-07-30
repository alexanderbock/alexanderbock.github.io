```{=html}
<div>
  <% for (const publication of items) { %>
    <div class="tabular">
      <div style="float: right; text-align: right; margin-left: 10px">
        <div>
          <span><a href="https://www.wikiwand.com/en/<%- publication.year %>" class="tabular-year"><%- publication.year %></a></span>

          <div>
            <% if (publication.video) { %>
              <a href="<%- publication.video %>">
                <span class="fa fa-video-camera tabular-icon" title="video: <%- publication.video %>"></span>
              </a>
              <span class="tabular-icon">|</span>
            <% } %>
            <% if (publication.code) { %>
              <a href="<%- publication.code %>">
                <span class="fa fa-code tabular-icon" title="code: <%- publication.code %>"></span>
              </a>
              <span class="tabular-icon">|</span>
            <% } %>
            <% if (publication.web) { %>
              <a href="<%- publication.web %>">
                <span class="fa fa-cloud tabular-icon" title="web: <%- publication.web %>"></span>
              </a>
              <span class="tabular-icon">|</span>
            <% } %>
            <% if (publication.bib) { %>
              <a href="<%- publication.bib %>">
                <span class="fa fa-book tabular-icon" title="bib: <%- publication.bib %>"></span>
              </a>
              <span class="tabular-icon">|</span>
            <% } %>
            <% if (publication.poster) { %>
              <a href="<%- publication.poster %>">
                <span class="fa fa-file-image tabular-icon" title="poster: <%- publication.poster %>"></span>
              </a>
            <% } %>
            <% if (publication.pdf) { %>
              <a href="<%- publication.pdf %>">
                <span class="fa fa-file-pdf tabular-icon" title="pdf: <%- publication.pdf %>"></span>
              </a>
            <% } %>
          </div>
          <% if (publication.annotations) { %>
            <span class="publication-annotation"><%- publication.annotations %></span>
          <% } else { %>
            <span class="tabular-type"><%- publication.type %></span>
          <% } %>
        </div>
      </div>
      <div>
        <% if (publication.pdf) { %>
          <a href="<%- publication.pdf %>" class="tabular-first-line"><%- publication.title %></a>
        <% } else if (publication.poster) { %>
          <a href="<%- publication.poster %>" class="tabular-first-line"><%- publication.title %></a>
        <% } else { %>
          <span class="tabular-first-line"><%- publication.title %></span>
        <% } %>
      </div>
      <div>
        <span class="tabular-second-line"><%- publication.authors.join(", ") %></span>
      </div>
      <div>
        <span class="tabular-third-line"><%- publication.venue %></span>
      </div>
    </div>
  <% } %>
</div>
```
